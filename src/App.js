import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Room from "./Room";

function App() {
  return (
    <div>
      <Router basename="/video_">

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/room/:roomID" element={<Room />} />
      </Routes>
      </Router>
      <ul
        style={{
          bottom: "0rem",
          position: "sticky",
          zIndex: "5",
          listStyle: "none",
        }}
      >
        <li>
          <a
            className="nav-link psg btn btn-info mx-5"
            aria-current="page"
            target="_blank"
            href="https://www.linkedin.com/in/aryan-nigam-34a249254/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            Handcrafted ❤ by Aryan
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
