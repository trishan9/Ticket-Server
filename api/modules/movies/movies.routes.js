import { Router } from "express"

import MoviesController from "./movies.controller.js"

const movieRouter = Router()

movieRouter.get("/", MoviesController.getAllMovies)
movieRouter.get("/:id", MoviesController.getMovie)
movieRouter.post("/", MoviesController.postMovie)

export default movieRouter