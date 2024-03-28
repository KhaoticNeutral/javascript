const inventory = [];
const item3 = {
    name: "computer",
    model: "hp",
    cost: 2500,
    qty: 8
}
const item2 = {
    name: "phone",
    model: "android",
    cost: 2000,
    qty: 42
}
const item1 = {
    name: "tablet",
    model: "ipad",
    cost: 6000,
    qty: 5
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);