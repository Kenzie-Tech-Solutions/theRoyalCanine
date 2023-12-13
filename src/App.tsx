import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/pages/Home/Home";
import { FaqBusinessDetails } from "./Components/pages/FaqBusinessDetails/FaqBusinessDetails";
import { PhotoGallery } from "./Components/pages/PhotoGallery/PhotoGallery";
import { Events } from "./Components/pages/Events/Events";
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
