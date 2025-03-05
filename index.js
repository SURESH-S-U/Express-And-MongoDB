const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

app.get('/',(req,res) => {
    res.send("The message is from API updated");
});

mongoose.connect('mongodb+srv://admin:SureshDatabase@cluster0.g6utv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("Database Connected");
})
.catch(() => {
    console.log("Database not connected");
})

