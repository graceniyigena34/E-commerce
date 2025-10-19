import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Make sure this matches your file name
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes here as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}


