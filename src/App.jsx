import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Hero />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
