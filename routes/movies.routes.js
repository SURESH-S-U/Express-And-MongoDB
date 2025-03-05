import express from 'express';
import { MovieCreate, MovieDelete, MovieGet, MovieUpdate } from '../controller/movies.controller';

const router = express.Router();

// CRUD functionalities of Movies

// R - for reading
router.get('/', MovieGet);

// C - for creating a movie
router.post('/', MovieCreate);

// U - for updating the movie
router.put('/:id', MovieUpdate);

// D - for deleting the movie
router.delete('/:id', MovieDelete);

export default router;
