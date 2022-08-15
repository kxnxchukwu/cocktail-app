import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages";
import SingleCocktail from "./pages/SingleCocktail";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </div>
  );
}

export default App;
