import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Home from "./Home";
import Header from "./Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
