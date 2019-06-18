import config from './config';
import apiRouter from './api';
import authRouter from './auth';
import adminRouter from './admin'
import session from 'express-session';
import sessionStore from './session';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import passport from './steampassport';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import ServerShuffle from './ServerShuffle';


const server = express();

const sess = {
    cookie: {
        maxAge: 86400000 * 30
    },
    secret: process.env.DRAGONIAN_DB_PASS,
    name: 'dragonianID',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
};

//CHANGE BACK TO (301)
//If server is running in production all request will be permanently(301) routed to https
if(config.nodeEnv === 'production'){
    let forceSsl = function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(301, ['https://', req.get('Host'), req.url].join(''));
        }
        return next();
    };
    server.use(forceSsl);
    server.use(helmet());

    //Add rate limiter to api, auth, and admin api routes
    //10(mins) * 60(secs) * 1000(ms)
    const rateLimiter = rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100
    });
    server.use('/api', rateLimiter);
    server.use('/auth', rateLimiter);
    server.use('/admin', rateLimiter);

    server.set('trust proxy', 1);
    sess.cookie.secure = true;
}

//Middleware to easily get json data from endpoints
server.use(bodyParser.urlencoded({limit: '100kb', extended: true}));
server.use(bodyParser.json());

//Middleware to use express sessions and load session store
server.use(session(sess));

//Middleware to use passport for authentication
//NOTE: passport.session() must be called AFTER session has been created and passed to express
server.use(passport.initialize());
server.use(passport.session());

//Sets the req.user object to a global instance that EJS has access to
server.use((req,res,next) => {
    res.locals.user = req.user;
    next();
});

//Endpoint routers for express to separate concerns
server.use('/api', apiRouter);
server.use('/auth', authRouter);
server.use('/admin', adminRouter);

server.use(express.static(path.join(__dirname,'client/build')));
server.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

//Set express to listen for request on the port specified in config.port
server.listen(config.port, () => {
    console.log("Server listening on port " + config.port);
    //Create server shuffle object to get active shuffle
    let serverShuffle = new ServerShuffle();

    //Check for active shuffle and save to servershuffle obj
    serverShuffle.getActiveShuffle()
    .then((shuffle)=>{
        serverShuffle = shuffle;
        console.log('\tActive shuffle found: ID#' + serverShuffle['Shuffle_ID']);
        serverShuffle.shuffleWithinHour();
    }).catch(err => {
        console.error(err);
    });

    //Check daily for new shuffles
    setTimeout(()=>{
        serverShuffle.getActiveShuffle()
        .then((shuffle)=>{
            serverShuffle = shuffle;
            console.log('Active shuffle found: ID# ' + serverShuffle['Shuffle_ID']);
            serverShuffle.shuffleWithinHour();
        }).catch(err => {
            console.error(err);
        });
    }, 86400000);

    //Check hourly for shuffle rounds ending
    setTimeout(()=>{
        serverShuffle.shuffleWithinHour();
    }, 3600000);
});
