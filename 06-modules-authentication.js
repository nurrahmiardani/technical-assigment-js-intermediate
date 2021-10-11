export default function validateLoginData(email,psw){
    let regexPsw = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
    let regexEmail = new RegExp (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    let hasil = regexEmail.test(email)
    if (hasil) {
        hasil = regexPsw.test(psw)
        if (hasil) {
          alert ("Welcome to The Jungle")
        } else{
          alert ("tolong masukkan password yang valid")
        }
      
      } else{
          alert ("tolong masukkan email yang valid")
      }
}