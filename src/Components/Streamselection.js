import React, { useState } from "react";
import axios from "../api/api";

const StreamSelection = () => {
  const [stream, setStream] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/select-stream", { stream_choice: stream });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message || "Stream selection failed");
    }
  };

  return (
    <div className="container" style={{padding: "154.5px"}}>
      <h2 className="text-center mb-4">Select Your Stream</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Choose your stream</label>
          <select
            className="form-select"
            value={stream}
            onChange={(e) => setStream(e.target.value)}
            required
          >
            <option value="">-- Select Stream --</option>
            <option value="IT">Information Technology</option>
            <option value="CSE">Computer Science</option>
            <option value="ECE">Electronics & Communication</option>
            <option value="ME">Mechanical Engineering</option>
            <option value="Civil">Civil Engineering</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Save Selection
        </button>
      </form>
    </div>
  );
};

export default StreamSelection;
