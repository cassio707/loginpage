//get username input
let inputuserName = document.querySelector('#username')
//get password input
let inputpassWord = document.querySelector('#password')
//get modal div tag
let Modlal = document.getElementById("modal")
//get modal span tag
let spanMassage = document.querySelector('.massege')
//get usernameCheck span
let spanUsernamecheck = document.querySelector('#usernameCheck')
//get passwordCheck span
let spanPasswordcheck = document.querySelector('#passwordCheck')
//function checkkey username
function usernamecheck(){
    //get username value
    let usernameValue = inputuserName.value
    if(usernameValue.length < 12){
        spanUsernamecheck.innerHTML="username must have 12 word"
        spanUsernamecheck.classList.remove('hidden')
    }
    else{
        spanUsernamecheck.classList.add('hidden')
    }
}
//function checkkey password
function passwordcheck(){
    //get username value
    let passwordValue = inputpassWord.value
    if(passwordValue.length < 8){
        spanPasswordcheck.innerHTML="password must have 8 word"
        spanPasswordcheck.classList.remove('hidden')
    }
    else{
        spanPasswordcheck.classList.add('hidden')
    }
}
//function for checking password status
function checkstatus(){
    //get username value
    let usernameValue = inputuserName.value
    //get password value
    let passwordValue = inputpassWord.value
    //check username and password status
    if((usernameValue.length < 12) || (passwordValue.length<8)){
        //add class to modal
        Modlal.classList.add('opacity-100','w-auto')
        //remove class to modal
        Modlal.classList.remove('w-1')
        //add custom massage
        spanMassage.innerHTML="plaese check data"
    }
    else {
        //add class to modal
        Modlal.classList.add('opacity-100','w-auto')
        //remove class to modal
        Modlal.classList.remove('w-1')
        //add custom massage
        spanMassage.innerHTML="login in successful"        
    }
    setTimeout(function(){
        Modlal.classList.remove('opacity-100')
        Modlal.classList.add('w-1')
    }, 2000)
}
