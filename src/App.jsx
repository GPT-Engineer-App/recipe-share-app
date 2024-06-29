import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddRecipe from "./pages/AddRecipe.jsx";
import Recipes from "./pages/Recipes.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/add-recipe" element={<AddRecipe />} />
        <Route exact path="/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;