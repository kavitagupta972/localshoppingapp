console.log("server file");

const express = require('express');
const app = new express();
app.use(express.json());

app.get('/productlist', (req, res, next)=> {
    res.write("product list is fetched from database");
    res.end();
})

app.listen(3000, ()=> {
    console.log("server is listening to port ");
})