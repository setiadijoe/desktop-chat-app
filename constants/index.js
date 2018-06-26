require('dotenv').config();

module.exports.CONSTANT = {
  INSTANCE_LOCATOR: process.env.INSTANCE_LOCATOR,
  SECRET_KEY: process.env.SECRET_KEY,
  TEST_TOKEN: process.env.TEST_TOKEN_PROVIDER
}
