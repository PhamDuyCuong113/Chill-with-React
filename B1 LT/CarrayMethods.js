const numbers = [1, 2, 3];

const doubled = numbers.map(x => x*2);

console.log(doubled); // [2, 4, 6]

// const users = ["Anh", "Lan", "Huy"];

// return (
//   <ul>
//     {users.map(name => (
//       <li key={name}>{name}</li>
//     ))}
//   </ul>
// );

const numberss = [1, 2, 3, 4, 5];

const even = numberss.filter(n => n % 2 === 0);

console.log(even); // [2, 4]

const users = [
  { name: "Anh", active: true },
  { name: "Lan", active: false }
];

const activeUsers = users.filter(u => u.active);

console.log(activeUsers); // [{ name: "Anh", active: true }]

const number = [1, 2, 3, 4];

const sum = number.reduce((total, n) => total + n, 10);

console.log(sum); // 10

const cart = [
  { name: "Áo", price: 100 },
  { name: "Quần", price: 200 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 300