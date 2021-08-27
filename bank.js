document.getElementById('login-submit').addEventListener('click',function(){
//console.log("button clicked");
const emailField=document.getElementById("user-email");
const userEmail=emailField.value;
//console.log(userEmail);
//password
const passfield=document.getElementById("user-pass");
const userPass=passfield.value;
//console.log(userPass);
if(userEmail=="sontan@gmail.com" && userPass=="secret"){
 window.location.href="banking.html"

}
})
