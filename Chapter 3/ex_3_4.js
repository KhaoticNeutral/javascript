const myCar = {
    make: "Ford",
    model: "Figo",
    tires: 4,
    doors: 4,
    color: "champagne",
    forSale: false
};

let propColor = "color";
myCar[propColor] = "red";
propColor = "forSale";
myCar[propColor] = true;
console.log(myCar.make + " " + myCar.model);
console.log(myCar.forSale);