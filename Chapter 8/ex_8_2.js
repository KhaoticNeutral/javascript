const arr = ["Steve", "Justin", "Larry", "The Lapertus???", "Bob", "Steve", "Justin", "Larry", "Steve", "Bob", "Mike"];
const arr2 = arr.filter ( (value, index, array) => {
    console.log(value,index,array.indexOf(value));
    return array.indexOf(value) === index;
});
console.log(arr2);