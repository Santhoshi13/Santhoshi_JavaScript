
class Service{
    private exp:number
    name:string // default is public
    protected email:string
    readonly projectCode:string;
    constructor(exp:number,name:string,projectCode:string){
        this.exp = exp;
        this.name = name; 
        this.projectCode = projectCode;
    }
    getName(){
        return this.name;
    }
    getExp(){
        if (this.exp > 7 )
          return (this.exp + this.name + this.projectCode);
         
    }
}

let objArr = [new Service(10,' ABC ','Treasury'),new Service(8,' XYZ ','Treasury'),new Service(2,' ZZZ ','Treasury'),new Service(10,' SSS ','Wealth'),new Service(8,' Lakshmi ','Wealth')];

var output ="" ;
for(var val of objArr){
        if (val.getExp() != undefined){
              output =  output + (val.getExp()) + ",";
        }
}
console.log("Employees with Exp > 7 are:: "+output)
