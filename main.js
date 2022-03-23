const express = require("express");
const cors = require("cors");
const server = express();

const PORT = 3000;

server.use(cors());
server.use(express.json());

//Routes
server.get("/about-us", function(request, response){
    //console.log(request.path)
    response.send("working");

    // response.send({
    //     path: request.path
    // })
})

server.post("/submit-registration", function(request, response){

    let userEmail = request.body.userEmail;
    let userPassword = request.body.userPassword;

    response.send({
        message: "User Registered Successfully",
        user_details: [1, 2, 3, 4],
        user_params: {
            firstname: "James",
            lastname: "Jerry",
            email: userEmail,
            password: userPassword
        }
    });
})


server.listen(PORT, function(){
    console.log("Running on PORT: ", PORT)
})