 
 interface IProject {
    project: string;
} 
interface IPerson  extends IProject{ 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 var employee:IPerson = { 
    firstName:"Santhosh",
    lastName:"Lakshmi", 
    project: "web-developer",
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);
 console.log(employee.project);