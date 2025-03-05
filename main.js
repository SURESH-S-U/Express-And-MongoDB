const express = require('express');
const app = express();

const PORT = 6969;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})

app.get('/' , (req,res) => {
    req.json({message:"Hello world"})
})



// CRUD functionalities of Movies

// R - for reading
app.get('/movies', () => {

})


// C - for creating movie
app.post('/movies', () => {

})


// U - for Updating the movie
app.put('/movies', () => {

})


// D - for deleting the movie
app.delete('/movies/:id', () => {
    
})