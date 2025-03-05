import express from 'express';
import movieRoutes from './routes/movies.routes.js'; // Ensure the file extension is included

const app = express();
const PORT = 6969;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.json({ message: "Hello world" }); // Fixed 'req.json' to 'res.json'
});

app.use('/movies', movieRoutes);
