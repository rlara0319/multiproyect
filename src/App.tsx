import Memotest from "./screens/Memotest";
import WordsPerMinute from "./screens/WordsPerMinute";
import Pokemon from "./screens/Pokemon";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Memotest />} path="/multiproyect/memotest" />
        <Route element={<Pokemon />} path="/multiproyect/pokemon" />
        <Route element={<WordsPerMinute />} path="/multiproyect/wpm" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
