const { request, response } = require("express");
var Express = require("express");

var app=Express();

app.get("/",(request,response)=>{

response.send("<h1>Welcome My Page<h1>")
})

app.get("/home",(request,response)=>{
    response.send("Welcome my home")
}

)
app.get("/gallery",(request,response)=>{
    response.send("Welcome My Gallery")
}
)


app.listen(3000),(error)=>{

    if (error){
        console.log("error occured")
    }
    else {
        console.log("Server Running")
    }
}