const scores = [8, 9, 10];

const [a, b, c] = scores;

console.log(a, b, c); // 8 9 10

const colors = ["red", "green", "blue"];

const [, seconds] = colors;

console.log(seconds); // green

const user = {
  name: "Anh",
  age: 20,
  city: "Hà Nội"
};

const { name, age } = user;

console.log(name, age); // Anh 20

const students = ["Nam", "Lan", "Huy"];
const [first, second] = students;

console.log(first, second); // undefined undefined

const product = {
  id: 101,
  name: "Laptop",
  price: 1500
};

const {name: productName, price: cost} = product;
console.log(productName, cost); // Laptop 1500