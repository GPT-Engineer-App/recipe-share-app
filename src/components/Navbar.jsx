import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">Recipe Sharing App</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/add-recipe" className="text-gray-300 hover:text-white">Add Recipe</Link>
          <Link to="/recipes" className="text-gray-300 hover:text-white">Recipes</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;