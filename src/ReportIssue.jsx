import React, { useState } from "react";

function ReportIssue() {
  const [issueType, setIssueType] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const submitIssue = async () => {
    const response = await fetch("http://localhost:5000/issues", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        issueType,
        location,
        description,
      }),
    });

    const data = await response.json();
    alert(data.message);
  };

  return (
    <div>
      <h2>Report Village Issue</h2>

      <input
        type="text"
        placeholder="Issue Type"
        value={issueType}
        onChange={(e) => setIssueType(e.target.value)}
      />

      <br /><br />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={submitIssue}>
        Submit Issue
      </button>
    </div>
  );
}

export default ReportIssue;