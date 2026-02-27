import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Home.jsx";
import Category from "./pages/Category.jsx";
import KnowledgeDetail from "./components/KnowledgeDetail.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/detail/:id" element={<KnowledgeDetail />} />
      </Routes>
    </>
  );
}

export default App;