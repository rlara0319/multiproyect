import { Routes, Route } from "react-router-dom";
import Memotest from "./screens/Memotest";
import WordsPerMinute from "./screens/WordsPerMinute";
import Pokemon from "./screens/Pokemon";

function App() {
  return (
    <Routes>
      <Route element={<Memotest />} path="/memotest" />
      <Route element={<Pokemon />} path="/pokemon" />
      <Route element={<WordsPerMinute />} path="/wpm" />
    </Routes>
  );
}

export default App;
