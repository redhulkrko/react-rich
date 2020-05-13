export const {
    PORT = 5000,
    NODE_ENV = 'development',
    MONGO_URI = 'mongodb://127.0.0.1:27017/data',
    SESS_NAME = 'sid',
    SESS_SECRET = 'secret!session',
    SESS_LIFETIME = 1000 * 60 * 60 * 2
  } = process.env;