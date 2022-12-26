import { Button } from "./components/Button";

// importações do Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Home } from "./pages/home";
import { Login } from "./pages/login";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
