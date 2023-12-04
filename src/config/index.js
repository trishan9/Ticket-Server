import "dotenv/config"

export default {
    app: {
        port: process.env.PORT,
    },
    database: {
        mongodb: {
            uri: process.env.MONGODB_URI
        }
    },
}