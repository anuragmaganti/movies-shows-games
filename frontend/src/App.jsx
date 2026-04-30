import Header from "./components/header-components/Header.jsx";
import MoviePage from "./pages/MoviePage.jsx";
import VideoGamePage from "./pages/VideoGamePage.jsx";
import TvShowPage from "./pages/TvShowPage.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<MoviePage />}></Route>
        <Route path="/tv-shows" element={<TvShowPage />}></Route>
        <Route path="/video-games" element={<VideoGamePage />}></Route>
      </Routes>
    </main>
  );
};

export default App;
