import express, { urlencoded } from 'express';
import movieRoutes from './routes/movies.routes.js'; // Ensure the file extension is included
import connectDB from './DataLibrary/db.js';

const app = express();
const PORT = 6969;


//Understanding Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.json({ message: "Hello world" }); // Fixed 'req.json' to 'res.json'
});

app.use('/movies', movieRoutes);


connectDB();