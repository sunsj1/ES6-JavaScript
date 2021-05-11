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