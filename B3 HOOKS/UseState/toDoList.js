import { useState } from "react";

function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);

  const handleChange = (e) => {
    setJob(e.target.value);
  };

  const handleAddJob = () => {
    const trimmedJob = job.trim();

    if (trimmedJob === "") return;

    const newJob = {
      id: Date.now(),
      text: trimmedJob,
      done: false,
    };

    setJobs((prev) => [...prev, newJob]);
    setJob("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddJob();
    }
  };

  const handleDeleteJob = (id) => {
    setJobs((prev) => prev.filter((item) => item.id !== id));
  };

  const handleToggleDone = (id) => {
    setJobs((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Nhập công việc..."
        value={job}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button onClick={handleAddJob}>Thêm</button>

      <ul>
        {jobs.map((item) => (
          <li key={item.id}>
            <span
              style={{
                textDecoration: item.done ? "line-through" : "none",
                marginRight: "10px",
              }}
            >
              {item.text}
            </span>

            <button onClick={() => handleToggleDone(item.id)}>
              {item.done ? "Bỏ hoàn thành" : "Hoàn thành"}
            </button>

            <button onClick={() => handleDeleteJob(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
