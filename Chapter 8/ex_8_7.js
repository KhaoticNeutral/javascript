let future = new Date(2024, 3, 27);
console.log(future);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month]} ${day} ${year}`;
console.log(myDate);
