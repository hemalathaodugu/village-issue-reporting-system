import React, { useEffect, useState } from "react";

function AdminDashboard() {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    const response = await fetch("http://localhost:5000/issues");
    const data = await response.json();
    setIssues(data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Issue Type</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          {issues.length === 0 ? (
            <tr>
              <td colSpan="3">No Issues Found</td>
            </tr>
          ) : (
            issues.map((issue) => (
              <tr key={issue.id}>
                <td>{issue.issueType}</td>
                <td>{issue.location}</td>
                <td>{issue.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;