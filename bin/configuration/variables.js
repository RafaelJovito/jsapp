const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://jovito:EwQcvabcDhJcD7n@ds119164.mlab.com:19164/nofoodjs'
                                             
    }
}
module.exports = variables;
