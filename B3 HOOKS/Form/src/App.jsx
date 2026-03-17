import { useState } from "react";

export default function App() {
  const [ho, setHo] = useState("");
  const [ten, setTen] = useState("");
  const [email, setEmail] = useState("");
  const [sdt, setSdt] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [matKhauMoi, setMatKhauMoi] = useState("");
  const [ngaySinh, setNgaySinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState("");
  const [diaChi, setDiaChi] = useState("");

  const handleChangeHo = (e) => {
    setHo(e.target.value);
  };
  const handleChangeTen = (e) => {
    setTen(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangeSdt = (e) => {
    setSdt(e.target.value);
  };
  const handleChangeMatKhau = (e) => {
    setMatKhau(e.target.value);
  };
  const handleChangeMatKhauMoi = (e) => {
    setMatKhauMoi(e.target.value);
  };
  const handleChangeNgaySinh = (e) => {
    setNgaySinh(e.target.value);
  };
  const handleChangeGioiTinh = (e) => {
    setGioiTinh(e.target.value);
  };
  const handleChangeDiaChi = (e) => {
    setDiaChi(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      ho === "" ||
      ten === "" ||
      email === "" ||
      sdt === "" ||
      matKhau === "" ||
      matKhauMoi === "" ||
      ngaySinh === "" ||
      gioiTinh === "" ||
      diaChi === ""
    ) {
      alert("Không được để trống bất kỳ ô nào");
      return;
    }

    if (matKhau !== matKhauMoi) {
      alert("Mật khẩu nhập lại phải trùng nhau");
      return;
    }
    if (!email.includes("@")) {
      alert("Email phải chứa ký tự @");
      return;
    }
    if (sdt.length < 10) {
      alert("Số điện thoại phải có ít nhất 10 số");
      return;
    }
    if (matKhau.length < 8) {
      alert("Mật khẩu phải có ít nhất 8 ký tự");
      return;
    }
    if (!/^\d+$/.test(sdt)) {
      alert("Số điện thoại chỉ được chứa chữ số");
      return;
    }
    const userData = {
      ho,
      ten,
      email,
      sdt,
      matKhau,
      ngaySinh,
      gioiTinh,
      diaChi,
    };
    console.log("Dữ liệu hợp lệ:", userData);
    alert("ĐĂNG KÝ THÀNH CÔNG");
    setHo("");
    setTen("");
    setEmail("");
    setSdt("");
    setMatKhau("");
    setMatKhauMoi("");
    setNgaySinh("");
    setGioiTinh("");
    setDiaChi("");

  };

  return (
    <div className="App">
      <h1>ĐĂNG KÝ TÀI KHOẢN MỚI</h1>
      <div className="form-group">
        <input
          className="form-input"
          value={ho}
          onChange={handleChangeHo}
          placeholder="Họ"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={ten}
          onChange={handleChangeTen}
          placeholder="Tên"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={email}
          onChange={handleChangeEmail}
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={sdt}
          onChange={handleChangeSdt}
          placeholder="Số điện thoại"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={matKhau}
          onChange={handleChangeMatKhau}
          placeholder="Mật khẩu"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={matKhauMoi}
          onChange={handleChangeMatKhauMoi}
          placeholder="Nhập lại mật khẩu"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={ngaySinh}
          onChange={handleChangeNgaySinh}
          placeholder="Ngày sinh"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={gioiTinh}
          onChange={handleChangeGioiTinh}
          placeholder="Giới tính"
        />
      </div>
      <div className="form-group">
        <input
          className="form-input"
          value={diaChi}
          onChange={handleChangeDiaChi}
          placeholder="Địa chỉ"
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Đăng ký
      </button>
    </div>
  );
}
