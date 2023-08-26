import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Courses from "./components/Courses";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Hero />} />
        <Route path="Home" element={<Home />} />
        <Route path="courses" element={<Courses />} />
      </Routes>
    </>
  );
}

export default App;
