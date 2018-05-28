const fs = require('fs')

const Authorization = (function () {
  const users = JSON.parse(fs.readFileSync('./server/data/user.json', 'utf8'), (key, value) => value)
  return {
    getUser (login) {
      if (login !== null) {
        const findIndex = users.findIndex(elem => elem.username === login)
        return users[findIndex]
      }
      return undefined
    },
    getLastId () {
      return users[0].id
    },
    validateUser (user) {
      if (user !== null) {
        const findIndex = users.findIndex(elem => elem.username === user.username)
        if (findIndex === -1) {
          return true
        }
      }
      return false
    },
    addUser (user) {
      if (Authorization.validateUser(user)) {
        users.unshift(user)
        fs.writeFileSync('./server/data/user.json', JSON.stringify(users))
        return true
      }
      return false
    }
  }
}())

module.exports = Authorization
