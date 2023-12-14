import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { FaqBusinessDetails } from "./pages/FaqBusinessDetails/FaqBusinessDetails";
import { PhotoGallery } from "./pages/PhotoGallery/PhotoGallery";
import { Events } from "./pages/Events/Events";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqBusinessDetails" element={<FaqBusinessDetails />} />
          <Route path="/photoGallery" element={<PhotoGallery />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
