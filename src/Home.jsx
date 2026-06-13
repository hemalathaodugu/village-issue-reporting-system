import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Village Issue Reporting System</h1>

      <Link to="/report">
        <button>Report Issue</button>
      </Link>

      <Link to="/admin">
        <button>Admin Dashboard</button>
      </Link>
    </div>
  );
}

export default Home;