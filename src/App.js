import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DrugResult from "./pages/DrugResult";
import DrugScan from "./pages/DrugScan";
import DrugSearch from "./pages/DrugSearch";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Home from "./pages/Home";
import Navbar from "./pages/components/Navbar";
import Footer from "./pages/components/Footer";

function App() {
  return (
    <Router>
      <div className="p-3">
        <Navbar />

        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/drugSearch" element={<DrugSearch />} />
            <Route path="/drugScan" element={<DrugScan />} />

            <Route path="/drugResult/:drugid" element={<DrugResult />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
