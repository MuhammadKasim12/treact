// function appendString(str){
//     return str+"FrontEnd";
// }

// function celciusToFahrenheit(num){
//     return (num*1.8) + 32;
// }

// console.log(celciusToFahrenheit(40));

// function isLoggedInAndSubscribed(loginStatus,subscriptionStatus){
//     return loginStatus==='LOGGED_IN' && subscriptionStatus==='SUBSCRIBED';
// }

let grades=['A+','FAIL', 'A-']

const fn=()=> {
    return 3;
}

// console.log(fn())
failed_grade=grades.filter(grade =>{
    if(grade!=='FAIL'){
        return true;
    }
})

failed_grade=grades.filter(grade => grade!=='FAIL')
// console.log(failed_grade)

dollars=[1,5,10,3]

// cents=dollars.map(dollar => dollar*100);
// console.log(cents)

let cents=[]

for(let k=0;k<dollars.length;k++){
    // cents.push[dollars[k]*100]
    cents.push(dollars[k]*100);
    // console.log(dollars[k])
}

// console.log(cents)

let users=
[]

function register(u){
    // user.username=u.username;
    // user.email=u.email;
    // user.password=u.password;
    // user.subscriptionStatus=u.subscriptionStatus;
    // user.discordId=u.discordId;
    // user.lessonCompleted=u.lessonCompleted;
    users.push(u)
    return users;
}

user1={
    username:"muhammadkasim",
    email:"muhammadkasim@gmail.com",
    password:"1234",
    subscriptionStatus:"subscribed",
    discordId:"9876",
    lessonCompleted:[1,2]
}

console.log(register(user1));