

var Service = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose")
var {Studmodel}=require("./model/student")
const { request, response } = require("express");

var appl=Service();


appl.use(bodyParser.urlencoded({extended:true}))

appl.use(bodyParser.json());


appl.get("/",(request,response)=>{
response.send("Welcome My Page")
})



appl.post('/add',(request,response)=>{

    var getnum1= parseInt(request.body.getnum1)
    var getnum2= parseInt(request.body.getnum2)
    var result= getnum1+getnum2

console.log(result)
  response.status(200).json({"result":result})
})


appl.post("/multi",(request,response)=>{
    const getnum1= parseInt(request.body.getnum1)
    const getnum2= parseInt(request.body.getnum2)
    const result =getnum1*getnum2

    response.status(200).json({"result":result})
})


appl.post("/oddeven",(request,response)=>{
    var num1= 10
    var num2=11
    var result= num1+num2

    //document.write("number ="+num+"()");
    if (result %2==0){
        response.status(200).json({"result":"Number is even"})  
        //document.write('Number is even!');
    }else {
        response.status(200).json({"result":"Number is odd"})
        //document.write('Number is odd!');
    }
    response.status(200).json({"result":"Number is even"})
})


appl.post("/employeeapp",(response,request)=>{
   var empname = request.body.empname
   var empcode =  request.body.empcode
   var empId =  request.body.empId
   var empsalary =  request.body.empsalary
   var empdesig =  request.body.empdesig
   var empaddress =  request.body.empaddress
   var empphone =  request.body.empphone

   response.status(200).json({"employee name:":empname,
   "Code:":empcode,"ID:":empId,"Salary:":empsalary,"Designation:":empdesig,
   "Address:":empaddress,"Phone No.":empphone})

})

appl.post('/addstud',(Request,response)=>{

    
})















appl.listen(3000),(error)=>{

if (error){
    console.log("error occured")
}
else{
    console.log("Server Running on http://localhost:3000")
}
}