import React, { lazy, Suspense } from "react";
import "./assets/App.css";
import "./assets/Main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import MainCarousel from "./components/Carousel";

// Lazy loading
const Main = lazy(() => import("./pages/Main"));
const Movies = lazy(() => import("./pages/Movies"));
const Stream = lazy(() => import("./pages/Stream"));
const Event = lazy(() => import("./pages/Event"));
const Plays = lazy(() => import("./pages/Plays"));
const Sports = lazy(() => import("./pages/Sports"));
const Activities = lazy(() => import("./pages/Activities"));
const Buzz = lazy(() => import("./pages/Buzz"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/event" element={<Event />} />
            <Route path="/play" element={<Plays />} />
            <Route path="/sport" element={<Sports />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/buzz" element={<Buzz />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
