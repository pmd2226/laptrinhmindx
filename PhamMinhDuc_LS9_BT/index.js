console.log("1. ");
let student = {
    name: "John",
    age: 20,
};
student.major = "Computer Science";

console.log("2. ");
let person = { name: "Alice", age: 25, job: "Designer" };
delete person.job;

console.log("3. ");
let car = { brand: "Toyota", model: "Camry", year: 2020 };
let count = Object.keys(car).length;
console.log(count);

console.log("4. ");
let product = { name: "Laptop", price: 1000 }
let entries = Object.entries(product);
console.log(entries);

console.log("5. ");
let products = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ];
let result = null;
for (let i = 0; i < products.length; i++) {
    if (products[i].name == "Camera") {
        result = products[i];
        break;
    }
}
console.log(result);

console.log("6. ");
let products_2 = [ { name: "Phone", price: 500 }, { name: "Camera", price: 300 }, { name: "Tablet", price: 700 } ];
let filteredPorducts = products_2.filter(product => product.price > 100);
console.log(filteredPorducts);

console.log("7. ");
let person_7 = { name: "Bob", age: 25, job: "Developer" }
person_7.age = 30;
console.log(person_7);

console.log("8. ");
letobj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let merged = { ...obj1, ...obj2 };

console.log(merged);

console.log("9. ");
let animal = { type: "Dog", name: "Buddy", age: 3 };
for (let key in animal) {
    console.log(`${key}: ${animal[key]}`);
}

console.log("10");
let car_10 = { brand: "BMW", model: "X5" }
let hasColor = "color" in car_10
console.log(hasColor)