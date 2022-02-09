// console.log("Print numbers form 1 TO 10")
// let numbers =10
// for(let i=1; i<=numbers;i++){
//     console.log(i)
// }


//prime or not


let numbers =4;
let flag=true;
for(let div=2;div<numbers;div++){
    if(numbers % div == 0){
        flag=false;
        break;
    }
   
}
if(flag == true)
    console.log(numbers,"is prime");
else
    console.log(numbers,'is not prime');
