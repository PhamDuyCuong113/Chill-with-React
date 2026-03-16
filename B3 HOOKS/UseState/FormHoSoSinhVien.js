import "./styles.css";
import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    msv: "",
    hoTen: "",
    email: "",
    sdt: "",
    lop: "",
    khoa: "",
    ngaySinh: "",
    gioiTinh: "",
    diaChi: "",
    tinhThanh: "",
    soThich: "",
    kyNangMem: "",
    mucTieuSauTotNghiep: "",
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
    if (!form.email.includes("@")) {
      alert("Email phai co @");
      return;
    }
    alert("Đã nộp đơn thành công");
  };

  return (
    <div className="App">
      <h1>HỒ SƠ SINH VIÊN NHẬP HỌC</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="msv"
          type="text"
          placeholder="Mã sinh viên"
          value={form.msv}
          onChange={handleChange}
        />
        <hr />
        <input
          name="hoTen"
          type="text"
          placeholder="Họ và tên"
          value={form.hoTen}
          onChange={handleChange}
        />
        <hr />
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <hr />
        <input
          name="sdt"
          type="text"
          placeholder="Số điện thoại"
          value={form.sdt}
          onChange={handleChange}
        />
        <hr />
        <input
          name="lop"
          type="text"
          placeholder="Lớp"
          value={form.lop}
          onChange={handleChange}
        />
        <hr />
        <input
          name="khoa"
          type="text"
          placeholder="Khoa"
          value={form.khoa}
          onChange={handleChange}
        />
        <hr />
        <input
          name="ngaySinh"
          type="date"
          placeholder="Ngày sinh"
          value={form.ngaySinh}
          onChange={handleChange}
        />
        <hr />
        <select name="gioiTinh" value={form.gioiTinh} onChange={handleChange}>
          <option value="">-- Chọn giới tính --</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
          <option value="Khác">Khác</option>
        </select>
        <hr />
        <input
          name="diaChi"
          type="text"
          placeholder="Địa chỉ"
          value={form.diaChi}
          onChange={handleChange}
        />
        <hr />
        <input
          name="tinhThanh"
          type="text"
          placeholder="Tỉnh thành"
          value={form.tinhThanh}
          onChange={handleChange}
        />
        <hr />
        <input
          name="soThich"
          type="text"
          placeholder="Sở thích"
          value={form.soThich}
          onChange={handleChange}
        />
        <hr />
        <input
          name="kyNangMem"
          type="text"
          placeholder="Kỹ năng mềm"
          value={form.kyNangMem}
          onChange={handleChange}
        />
        <hr />
        <textarea
          name="mucTieuSauTotNghiep"
          placeholder="Mục tiêu sau tốt nghiệp"
          value={form.mucTieuSauTotNghiep}
          onChange={handleChange}
        />
        <hr />
        <button type="submit"> Nộp đơn </button>
      </form>
    </div>
  );
}
