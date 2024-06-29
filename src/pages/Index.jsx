import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl text-center">Welcome to Recipe Sharing App</h1>
      <p className="text-center">Store and share your favorite recipes with family and friends.</p>
      <div className="space-x-4">
        <Link to="/add-recipe" className="text-blue-500 hover:underline">Add New Recipe</Link>
        <Link to="/recipes" className="text-blue-500 hover:underline">View Recipes</Link>
      </div>
    </div>
  );
};

export default Index;