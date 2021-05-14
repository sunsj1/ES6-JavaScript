const arr=[10,20,30,40,50];
 const print=(user)=>{
     const[a,b,c,...remaining]=arr;
     console.log(a,b,c,remaining);
 }
 print(arr);