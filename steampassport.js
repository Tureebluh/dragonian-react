import config from './config';
import dbpool from './dbpool';
import fetch from 'node-fetch';

const OpenIDStrategy = require('passport-openid').Strategy;
const SteamStrategy = new OpenIDStrategy(
    {
        providerURL: 'https://steamcommunity.com/openid',
        stateless: true,
        returnURL: (config.nodeEnv === 'development') ? 'http://192.168.86.39:5000/auth/login/return' : 'https://www.dragonian.xyz/auth/login/return',
        realm: (config.nodeEnv === 'development') ? 'http://192.168.86.39:5000' : 'https://www.dragonian.xyz'
    },
        function(identifier, done){
            fetch('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=' + process.env.STEAM_API_KEY + '&steamids=' + identifier.match(/\d+$/)[0])
            .then(res => {
                return res.json();
            })
            .then(resJson => {
                dbpool.getConnection( (err, connection) => {
                    
                    connection.query('CALL Get_UserRoles(' + resJson.response.players[0].steamid + ');', (error, results, fields) => {
                        if (error) throw error;
                        let tempArray = results[0];
                        let rolesArray = [];
                        tempArray.forEach((obj)=>{
                            rolesArray.push(obj.role);
                        });
                        if(!rolesArray.includes('Banned')){
                            let userJson =  {
                                'steamid': resJson.response.players[0].steamid,
                                'roles': rolesArray,
                                'personaname': resJson.response.players[0].personaname,
                                'avatarfull': resJson.response.players[0].avatarfull,
                                'profileurl': resJson.response.players[0].profileurl,
                                'verified': false,
                                'voted': true,
                            };
                            connection.query('CALL Upsert_User(\'' + resJson.response.players[0].steamid + '\',\'' + resJson.response.players[0].personaname +
                            '\',\'' + resJson.response.players[0].avatarfull + '\',\'' + resJson.response.players[0].profileurl + '\');', (errorTwo, resultsTwo, fields) => {
                                if (errorTwo) throw errorTwo;
                                connection.release();
                                userJson.verified = (resultsTwo[0][0].verified === 1) ? true : false;
                                return done(null, userJson);
                            });
                        } else {
                            connection.release();
                            return done(null, false);
                        }
                        // Don't use the connection here, it has been returned to the pool.
                    });
                });
            })
            .catch(err => console.error(err));
        }
);

const passport = require('passport');
passport.use(SteamStrategy);

passport.serializeUser(function(user, done){
    //create cookie
    done(null, user);
});
passport.deserializeUser(function(user, done){
    //retrieve user from cookie
    done(null, user);
});

export default passport;