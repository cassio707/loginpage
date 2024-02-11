function checkpassword(){
    let inpuuserName = document.querySelector('#username')
    let inputpassWord = document.querySelector('#password')
    console.log(inpuuserName.innerHTML.length)
     console.log(inputpassWord.innerHTML.length)
    if((inpuuserName.innerHTML.length < 12) || (inputpassWord.innerHTML.length<8)){
        alert("نام کاربری و رمز عبور را با دقت وارد کنید")
    }
    else {
        alert("با موفقیت وارد شدید")
    }
}
