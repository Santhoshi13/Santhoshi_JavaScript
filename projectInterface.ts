interface iProject {
    project:string
}

class Service implements iProject{
    exp:number
    name:string // default is public
    project: string
        constructor(exp:number,name:string,project:string){
        this.exp = exp;
        this.name = name;
        this.project = project;
    }
    getName(){
        return this.name;
    }    
    
}

let objArr = [new Service(10,' ABC ','Treasury'),new Service(8,' XYZ ','Treasury'),new Service(2,' ZZZ ','Treasury'),new Service(13,' SSS ','Wealth'),new Service(9,' Lakshmi ','Wealth')];

function isexp(emp) { 
    return emp.exp > 7;
  }
  
var validList = objArr.filter(isexp).sort(function(a, b) {return a.exp - b.exp  });
var uniqueProjects = validList.map(item => item.project)  .filter((value, index, self) => self.indexOf(value) === index)
var str = "";
for (var i =0;i<uniqueProjects.length;i++){
    for(var val1 of validList){
        if(uniqueProjects[i] == val1.project)
          str = str.concat(val1.exp+",")
    }
    console.log("Project "+uniqueProjects[i]+" Values are ["+str.substr(0,str.length-1)+"]")
    str= ""
}


