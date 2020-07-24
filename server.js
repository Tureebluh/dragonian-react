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


const server = express();

const sess = {
    cookie: {
        maxAge: 86400000 * 1
    },
    secret: process.env.DRAGONIAN_DB_PASS,
    name: 'dragonianID',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
};

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

server.use(express.static('client/build'));
server.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


//CHANGE BACK TO (301)
//If server is running in production all request will be permanently(301) routed to https
if(config.nodeEnv.trim() !== 'development'){
    let forceSsl = function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
            return res.redirect(301, ['https://', req.get('Host'), req.url].join(''));
        }
        return next();
    };
    server.use(forceSsl);
    server.use(helmet());
    server.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
    server.use(helmet.noSniff());
    server.use(helmet.xssFilter());
    server.use(helmet.referrerPolicy({ policy: 'no-referrer' }));

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
    sess.cookie.sameSite = 'Strict';
}

//Set express to listen for request on the port specified in config.port
server.listen(config.port, () => {
    console.log("Server listening on port " + config.port);
});
