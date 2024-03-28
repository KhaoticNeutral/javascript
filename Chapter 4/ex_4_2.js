let age = prompt("How old are you?");
age = Number(age);
let message;
if(age >= 18){
    message = "You can enter and drink.";
}else if(age >= 16){
    message = "You can enter but not drink.";
}else{
    message = "You are not allowed in!";
}
console.log(message);