//get username input
let inputuserName = document.querySelector('#username')
//get password input
let inputpassWord = document.querySelector('#password')
//get modal div tag
let Modlal = document.getElementById("modal")
//get modal span tag
let spanMassage = document.querySelector('.massege')
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
}
