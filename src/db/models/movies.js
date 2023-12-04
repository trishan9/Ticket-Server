import { model, Schema } from "mongoose"

const moviesSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    released: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    cast: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true,
    },
    ticketPriceNormal: {
        type: String,
        required: true,
    },
    ticketPriceVip: {
        type: String,
        required: true,
    },
})

const Movies = model("Movie", moviesSchema)

export default Movies