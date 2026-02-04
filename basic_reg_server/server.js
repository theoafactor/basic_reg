const express = require("express");
const cors = require("cors");
require("dotenv").config();


//create server
const server = express();

// middleware
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3000;


server.get("/", (request, response) => {

    response.send({
        message: "This server works fine"
    })

});

// register
server.post("/register", (request, response) => {
    let firstname = request.body.firstname;
    let lastname = request.body.lastname;
    let email = request.body.email;
    let password = request.body.password;


    console.log(firstname);


    response.send({
        message: "User registered"
    })

})



server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))