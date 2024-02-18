import { BrowserRouter, Routes, Route } from "react-router-dom";
//styles
import "./App.css";
//components
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
