require('dotenv/config')
const env = require('env-var')

const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
}

module.exports = { envs }