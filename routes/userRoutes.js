const mongoose = require('mongoose')
const User = mongoose.model('userdbs')

const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local')

module.exports = (app) => {
    app.post('/api/join', async(req, resp) => {
        const user = await User.create(req.body)
        return resp.status(200).send({
            error:false,
            user
        })
    })

    app.use(passport.initialize())
    app.use(session({
      secret: '암호화에 쓸 비번',
      resave : false,
      saveUninitialized : false
    }))
    
    app.use(passport.session()) 

    passport.use(new LocalStrategy(async (username, password, done) => {
        try {
            const user = await User.findOne({ username: username });
            if (!user) {
                console.log('db에 없음');
                return done(null, false, { message: '아이디 DB에 없음' });
            }
            if (user.password === password) {
                return done(null, user);
            } else {
                return done(null, false, { message: '비번불일치' });
            }
        } catch (error) {
            return done(error);
        }
    }));

    app.post('/api/login', async(req, resp, next) => {
        passport.authenticate('local', (error, user, info) => {
            if (error) {
                return resp.status(500).json(error);
            }
            if (!user) {
                return resp.status(401).json({ message: '아이디나 비밀번호가 잘못되었습니다.' });
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                resp.status(200).json(user);
            });
        })(req, resp, next);
    });
}
