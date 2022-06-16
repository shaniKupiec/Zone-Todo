const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

module.exports = {
  login,
  signup,
}

async function login(email, password) {
  logger.debug(`auth.service - login with email: ${email}`)
  console.log('email', email)
  const user = await userService.getByEmail(email)
  if (!user) return Promise.reject('Invalid email or password')
  // TODO: un-comment for real login
  const match = await bcrypt.compare(password, user.password)
  if (!match) return Promise.reject('Invalid email or password')

  delete user.password
  return user
}

async function signup(fullName, username, email, password) {
  const saltRounds = 10

  logger.debug(`auth.service - signup with email: ${email}, fullName: ${fullName}`)
  if (!fullName || !username || !email || !password) return Promise.reject('fullName, email and password are required!')

  const hash = await bcrypt.hash(password, saltRounds)
  return userService.add({ fullName, email, username, password: hash })
}
