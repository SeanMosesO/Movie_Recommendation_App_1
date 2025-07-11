import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Discover from "./pages/Discover";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
