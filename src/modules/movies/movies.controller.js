import Movies from "../../db/models/movies.js"

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movies.find()
        res.json(movies)
    } catch (err) {
        res.status(404).json({
            success: false,
            error: err.message
        })
    }
}

const getMovie = async (req, res) => {
    try {
        const movie = await Movies.findById(req.params.id)
        res.json(movie)
    } catch (err) {
        res.status(404).json({
            success: false,
            error: err.message
        })
    }
}

const postMovie = async (req, res) => {
    const body = req.body
    await Movies.create(body)
    res.send("Success")
}


export default { getAllMovies, getMovie, postMovie }