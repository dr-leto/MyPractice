const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const fs = require('fs')
const Authorization = require('./server/data/authorization.js')

/*
авторизация пользователя (добавляет нового юзера, если его еще не было в нашем json
файле, если не было проверяет, чтобы хэш совпадал с паролем)
 */
passport.use(new LocalStrategy((username, password, done) => {
  const newId = String(Number(Authorization.getLastId()) + 1)
  const user = {
    id: newId,
    username: username
  }
  const newPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
  const newUser = {
    id: newId,
    username: username,
    password: newPassword
  }
  if (Authorization.addUser(newUser)) {
    done(null, user)
  } else {
    const us = Authorization.getUser(username)
    if (us !== undefined) {
      if (bcrypt.compareSync(password, us.password)) {
        done(null, user)
      } else done(null, false)
    } else {
      done(null, false)
    }
  }
}))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  done(null, user)
})

module.exports = passport
