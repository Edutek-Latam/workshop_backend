require('dotenv/config')
const env = require('env-var')

const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    MONGODB_URL: env.get('MONGODB_URL').required().asUrlString()
}

module.exports = { envs }