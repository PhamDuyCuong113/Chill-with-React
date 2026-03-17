import { useRef } from "react";

export default function App() {
  const hoTenRef = useRef();
  const tuoiRef = useRef();
  const truongRef = useRef();
  const nganhRef = useRef();
  const gioHocRef = useRef();
  const thoiDiemHocRef = useRef();
  const monThichRef = useRef();
  const monYeuRef = useRef();
  const triHoanRef = useRef();
  const pomodoroRef = useRef();
  const tapTrungRef = useRef();
  const mucTieuRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tuoi = Number(tuoiRef.current.value);
    const gioHoc = Number(gioHocRef.current.value);
    const tapTrung = Number(tapTrungRef.current.value);

    // validate
    if (isNaN(tuoi)) {
      alert("Tuổi phải là số");
      return;
    }

    if (gioHoc <= 0) {
      alert("Giờ học phải lớn hơn 0");
      return;
    }

    if (tapTrung < 1 || tapTrung > 10) {
      alert("Mức độ tập trung phải từ 1 đến 10");
      return;
    }

    const result = {
      hoTen: hoTenRef.current.value,
      tuoi: tuoi,
      truong: truongRef.current.value,
      nganh: nganhRef.current.value,
      gioHocMoiNgay: gioHoc,
      thoiDiemHoc: thoiDiemHocRef.current.value,
      monThich: monThichRef.current.value,
      monYeu: monYeuRef.current.value,
      triHoan: triHoanRef.current.value,
      dungPomodoro: pomodoroRef.current.value,
      mucDoTapTrung: tapTrung,
      mucTieuThang: mucTieuRef.current.value
    };

    console.log(result);
  };

  return (
    <div className="App">
      <h1>Khảo Sát Thói Quen Học Tập</h1>

      <form onSubmit={handleSubmit}>
        <input ref={hoTenRef} placeholder="Họ tên" />
        <hr />

        <input ref={tuoiRef} placeholder="Tuổi" />
        <hr />

        <input ref={truongRef} placeholder="Trường" />
        <hr />

        <input ref={nganhRef} placeholder="Ngành học" />
        <hr />

        <input ref={gioHocRef} placeholder="Giờ học mỗi ngày" />
        <hr />

        <input ref={thoiDiemHocRef} placeholder="Thích học sáng / chiều / đêm" />
        <hr />

        <input ref={monThichRef} placeholder="Môn thích nhất" />
        <hr />

        <input ref={monYeuRef} placeholder="Môn yếu nhất" />
        <hr />

        <input ref={triHoanRef} placeholder="Bạn có hay trì hoãn không?" />
        <hr />

        <input ref={pomodoroRef} placeholder="Bạn có dùng Pomodoro không?" />
        <hr />

        <input ref={tapTrungRef} placeholder="Mức độ tập trung (1-10)" />
        <hr />

        <textarea ref={mucTieuRef} placeholder="Mục tiêu học tập tháng này" />
        <hr />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}