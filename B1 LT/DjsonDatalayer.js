// Bài 1 – Đọc JSON

// Cho JSON:

const product = {
  "product": {
    "name": "Laptop",
    "price": 1500,
    "tags": ["office", "gaming"]
  }
}

// 👉 Truy cập:

// tên sản phẩm

console.log(product.product.name); // Output: Laptop

// tag "gaming"

console.log(product.product.tags[1]); // Output: gaming

// 📝 Bài 2 – Render từ JSON

// Cho dữ liệu:

const data = {
  users: [
    { id: 1, name: "Anh" },
    { id: 2, name: "Lan" }
  ]
};

const renderUsers = data.users
  .map(user => `<li>${user.name}</li>`)
  .join("");

console.log(renderUsers);

console.log(renderUsers); // Output: <li key=1>Anh</li><li key=2>Lan</li>
// 👉 Dùng .map() để render:

// - Anh
// - Lan