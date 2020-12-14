var names:string[] = new Array("Mary","Tom","Jack","Jill")  ;
var nums:number[] = [1,2,3,3] ;

function disp(arr_names:string[],arr_ids:number[]) {
   for(var i = 0;i<arr_names.length;i++) { 
      console.log(names[i]) ;
   }  
   for(var i = 0;i<arr_ids.length;i++) { 
    console.log(nums[i]) ;
 }  
}  
disp(names,nums);
