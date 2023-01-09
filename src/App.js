import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import MovieDetails from "./components/Details/MovieDetails";
import PremiereDetails from "./components/Details/PremiereDetails";
import EventDetails from "./components/Details/EventDetails";

// Lazy loading
const Main = lazy(() => import("./pages/Main"));
const Movies = lazy(() => import("./pages/Movies"));
const Stream = lazy(() => import("./pages/Stream"));
const Event = lazy(() => import("./pages/Event"));
const Plays = lazy(() => import("./pages/Plays"));
const Sports = lazy(() => import("./pages/Sports"));
const Gift = lazy(() => import("./pages/Gift"));
const Offers = lazy(() => import("./pages/Offers"));

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/stream" element={<Stream />} />
            <Route path="/stream/:id" element={<PremiereDetails />} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/:id" element={<EventDetails />} />
            <Route path="/play" element={<Plays />} />
            <Route path="/sport" element={<Sports />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/gift" element={<Gift />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
