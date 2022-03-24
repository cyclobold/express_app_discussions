const express = require("express");
const cors = require("cors");
const server = express();

const PORT = 3000;

server.use(cors());
server.use(express.json());


const users = [
    {
        "firstname": "James",
        "othername": "John",
        "email": "james@email.com"
    }, 

    {
        "firstname": "Jerry",
        "othername": "Jude",
        "email": "jerry@email.com"

    }, 

    {
        "firstname": "Mat",
        "othername": "Jane",
        "email": "jane@email.com"
    }


]




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


server.get("/get-users", function(request, response){

    

    if(request.query.email != null){
        email = request.query.email

        for(let i = 0; i < users.length; i++){
            if(users[i].email === email){
                users_array = [];
                users_array.push(users[i]);
                response.send(users_array);
                break;
            }
        }

    }else{
        response.send(users)
    }

    

})


server.listen(PORT, function(){
    console.log("Running on PORT: ", PORT)
})