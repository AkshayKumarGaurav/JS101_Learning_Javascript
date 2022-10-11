//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let data_username="akshaykumargaurav@gmail.com";
let data_pass="1234@";

let username="akshaykumargaurav@gmail.com";
let pass="1234@";

if(data_username == username){
  if(data_pass == pass){
    console.log("Login Successful");
  }else{
    console.log("Wrong password");
  }
}else{
  console.log("Invalid username");
}