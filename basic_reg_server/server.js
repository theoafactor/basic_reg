const express = require("express");
require("dotenv").config();


//create server
const server = express();

const PORT = process.env.PORT || 3000;


server.get("/", (request, response) => {

    response.send({
        message: "This server works fine"
    })

})



server.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))