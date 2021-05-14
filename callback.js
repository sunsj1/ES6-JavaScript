/*
const obj={
    first:"suraj",
    last:"jadhav",
    age:"22"
}
const greet=(user)=>{
    const first=user.first;
    const last=user.last;
    console.log(`welcome ${first} ${last}`);
}
greet(obj);
*/
const doSomething=(action,data,method)=>{
    console.log(`performing ${action}`);
   
    method(data);

}
const p=(val)=>{
    console.log(`${val[0]+val[1]}`)
}
doSomething("Addition",[10,20],p);