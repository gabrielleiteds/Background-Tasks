export default {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.USER_PASS
  }
}