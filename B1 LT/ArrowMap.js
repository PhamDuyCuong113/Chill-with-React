/**
 *Bài 2 — Arrow + .map()

Cho mảng:

const numbers = [1, 2, 3, 4, 5];

👉 Yêu cầu:

Dùng arrow function với .map() để tạo mảng mới nhân đôi giá trị.

Dùng arrow function với .map() để tạo mảng mới dạng:
*/

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

const doubledNumbers2 = numbers.map(number => `So ${number * 2}`);
console.log(doubledNumbers2); 