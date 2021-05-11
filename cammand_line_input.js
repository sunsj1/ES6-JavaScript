const prompt_sync= require('prompt-sync');
const input=prompt_sync();


const obj{
    
      fullname: fullname,
      city:city,
      birthdate:bdate,
      skills:{
          codinglang:clang,
          softskills:softskills,
          languages:languages
      }
      // ...other properties

  }
   
const addtUser=(user)=>{
    const fullname=input('enter full name');
    const city=input('enter city');
    const birthdate=input('enter birthdate');
    const codinglang=input('enter coding lang');
    const softskills=input('enter softskills');
    const languages=input('enter languages');
    let user = makeUser(fullname,city,birthdate,codinglang,softskills,languages);
};
addUser(obj);


function getUser(){
    console.log(user.fullname);
}
console.log(getUser());



/*
while(true){
    console.log("1.Add user\n2.Remove user\n3.update user data\n4.get user\n5.get user N coding language");
    const ch=input();

switch(ch){
    case '1':{
        addUser();
        break;
        }
             
        
    case '2':{
        getUser();
        break;
        }
    case '6':
        exit();
        
}
}
*/