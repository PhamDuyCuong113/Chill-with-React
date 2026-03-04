/*
Bài 3 — Arrow + Object + this

Xem đoạn code này:

const person = {
  name: "Cuong",
  sayHello: function () {
    return "Hello " + this.name;
  }
};

👉 Nhiệm vụ:
Đổi sayHello thành arrow function.
Chạy thử trong đầu xem có bug không.
Giải thích vì sao có/không có bug.
🔥 Hint: Arrow function không có this riêng.
*/

// const person = {
//   name: "Cuong",
//   sayHello: function () {
//     return "Hello " + this.name;
//   }
// };

const person = {
  name: "Cuong",
  sayHello: () => {
    return "Hello " + this.name;
  }
};

console.log(person.sayHello());//Output: Hello Cuong

const person2 = {
  name: "Cuong",
  sayHello() {
    const inner = () => {
      return "Hello " + this.name;
    };
    return inner();
  }
};

console.log(person2.sayHello());