import { NavLink, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";

function Placeholder({ title }) {
  return (
    <div className="text-muted">
      <h2 className="h4">{title}</h2>
      <p>Coming soon…</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="sidebar bg-white border-end">
        <div className="p-3">
          <div className="d-flex align-items-center gap-2 mb-3">
            <div className="logo-dot"></div>
            <span className="fw-semibold">Blue Carbon MRV</span>
          </div>

          <nav className="nav flex-column">
            <NavLink end to="/" className="nav-link px-2">
              <i className="bi bi-speedometer2 me-2" /> Dashboard
            </NavLink>
            <NavLink to="/projects" className="nav-link px-2">
              <i className="bi bi-kanban me-2" /> Projects
            </NavLink>
            <NavLink to="/reports" className="nav-link px-2">
              <i className="bi bi-graph-up-arrow me-2" /> Reports
            </NavLink>
            <NavLink to="/admin" className="nav-link px-2">
              <i className="bi bi-shield-lock me-2" /> Admin
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* Main area */}
      <main className="flex-grow-1 min-vh-100 d-flex flex-column">
        {/* Top bar */}
        <header className="border-bottom bg-light">
          <div className="container-fluid py-3 d-flex justify-content-between align-items-center">
            <h1 className="h4 m-0">Dashboard</h1>
            <button className="btn btn-outline-secondary">
              <i className="bi bi-list" />
            </button>
          </div>
        </header>

        {/* Routed content */}
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Placeholder title="Projects" />} />
            <Route path="/reports" element={<Placeholder title="Reports" />} />
            <Route path="/admin" element={<Placeholder title="Admin" />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
