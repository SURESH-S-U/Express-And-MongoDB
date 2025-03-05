import express from 'express';

const router = express.Router();

// CRUD functionalities of Movies

// R - for reading
router.get('/', (req, res) => {
    res.send("Get all movie list.");
});

// C - for creating a movie
router.post('/', (req, res) => {
    res.send("Create movies.");
});

// U - for updating the movie
router.put('/:id', (req, res) => {
    res.send("Movies updated.");
});

// D - for deleting the movie
router.delete('/:id', (req, res) => {
    res.send("Movies deleted.");
});

export default router;
