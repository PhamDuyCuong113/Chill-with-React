import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    hoTen: "",
    email: "",
    soDienThoai: "",
    truongHoc: "",
    chuyenNganh: "",
    namHoc: "",
    gpa: "",
    kyNang: "",
    github: "",
    cv: "",
    mucTieu: "",
    fullTime: false,
    viTri: "",
  });

  const handleChange = (e) => {  
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const gpaNumber = Number(form.gpa);

    if (gpaNumber < 0 || gpaNumber > 4) {
      alert("GPA phải từ 0 đến 4");
      return;
    }

    if (!form.github.startsWith("http")) {
      alert("Link GitHub phải bắt đầu bằng http");
      return;
    }

    if (form.mucTieu.trim().length < 30) {
      alert("Mục tiêu nghề nghiệp phải có ít nhất 30 ký tự");
      return;
    }

    alert("Ứng tuyển thành công");
  };

  return (
    <div>
      <h1>Form Ứng Tuyển Thực Tập</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="hoTen"
          placeholder="Họ tên"
          value={form.hoTen}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="soDienThoai"
          placeholder="Số điện thoại"
          value={form.soDienThoai}
          onChange={handleChange}
        />

        <input
          type="text"
          name="truongHoc"
          placeholder="Trường học"
          value={form.truongHoc}
          onChange={handleChange}
        />

        <input
          type="text"
          name="chuyenNganh"
          placeholder="Chuyên ngành"
          value={form.chuyenNganh}
          onChange={handleChange}
        />

        <input
          type="text"
          name="namHoc"
          placeholder="Năm học"
          value={form.namHoc}
          onChange={handleChange}
        />

        <input
          type="number"
          name="gpa"
          placeholder="GPA"
          value={form.gpa}
          onChange={handleChange}
        />

        <input
          type="text"
          name="kyNang"
          placeholder="Kỹ năng"
          value={form.kyNang}
          onChange={handleChange}
        />

        <input
          type="text"
          name="github"
          placeholder="Link GitHub"
          value={form.github}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cv"
          placeholder="Link CV"
          value={form.cv}
          onChange={handleChange}
        />

        <textarea
          name="mucTieu"
          placeholder="Mục tiêu nghề nghiệp"
          value={form.mucTieu}
          onChange={handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="fullTime"
            checked={form.fullTime}
            onChange={handleChange}
          />
          Có thể làm full-time
        </label>

        <select name="viTri" value={form.viTri} onChange={handleChange}>
          <option value="">-- Chọn vị trí --</option>
          <option value="Frontend Intern">Frontend Intern</option>
          <option value="Backend Intern">Backend Intern</option>
          <option value="Fullstack Intern">Fullstack Intern</option>
          <option value="Tester Intern">Tester Intern</option>
        </select>

        <button type="submit">Ứng tuyển</button>
      </form>

      <hr />

      <h2>Preview</h2>
      <p>Họ tên: {form.hoTen}</p>
      <p>Email: {form.email}</p>
      <p>Số điện thoại: {form.soDienThoai}</p>
      <p>Trường học: {form.truongHoc}</p>
      <p>Chuyên ngành: {form.chuyenNganh}</p>
      <p>Năm học: {form.namHoc}</p>
      <p>GPA: {form.gpa}</p>
      <p>Kỹ năng: {form.kyNang}</p>
      <p>GitHub: {form.github}</p>
      <p>CV: {form.cv}</p>
      <p>Mục tiêu nghề nghiệp: {form.mucTieu}</p>
      <p>Full-time: {form.fullTime ? "Có" : "Không"}</p>
      <p>Vị trí mong muốn: {form.viTri}</p>
    </div>
  );
}

export default App;
