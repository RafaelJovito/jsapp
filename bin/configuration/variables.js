const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://jovito:EwQcvabcDhJcD7n@ds119164.mlab.com:19164/nofoodjs'
                                             
    },
    Security: {
        secretyKey: '06360038dbc2940b26be7b12339b618a|ee579026991c38b31769233d06321e55'
    }
}
module.exports = variables;
