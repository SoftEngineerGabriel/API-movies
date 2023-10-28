const express = require('express');
const { request } = require('http');


const app = express();
const Port = 8080;

app.listen(Port, (request, response) => {
    console.log(`Server is running on port ${Port}`);
});
