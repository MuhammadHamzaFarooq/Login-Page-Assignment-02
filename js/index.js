console.log(
  "Welcome to Online Chatbot Class And My Assignment Second"
);

let User = 'Muhammad Hamza Farooq';
let Password = '123456';


function UserLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
 if(username === User && password === Password){
     alert("Your Username and Password is Correct You Are Login");
     username.value = '';
     password.value = '';
 }
 else if(username === User && password != Password){
     alert("Plase Enter your Correct Passowrd !!!");
     password.value = '';
 }
 
 else if(username != User && password === Password){
     alert("Plase Enter your Correct username !!!");
     username.value = '';
 }
 else{
    alert("Plase Enter your Correct username  and password !!! . Sorry Try Again ####");
 }
 
}

