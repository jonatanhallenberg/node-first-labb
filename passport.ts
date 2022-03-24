import passport from 'passport';
import { BasicStrategy } from 'passport-http';

const initPassport = () => {

    passport.use(new BasicStrategy(
        (userid, password, done) => {
            if (userid === 'jonatan' && password === '123') {
                return done(null, { username: "jonatan" });
            } else {
                return done('Invalid credentials');
            }
            //Kolla om userid och password är korrekt
            //Är det korrect?
            //done(null, user);
            //Är det inte korrekt?
            //done(err);
        }
    ));

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user: any, done) {
        done(null, user);
    });

}

export default initPassport;