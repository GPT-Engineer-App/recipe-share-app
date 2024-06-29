import React from "react";

const Recipes = () => {
  // Placeholder for recipes data
  const recipes = [
    {
      title: "Spaghetti Carbonara",
      ingredients: "Spaghetti, Eggs, Parmesan, Pancetta, Pepper",
      instructions: "Boil pasta. Cook pancetta. Mix eggs and cheese. Combine all with pasta."
    },
    {
      title: "Chicken Curry",
      ingredients: "Chicken, Curry Powder, Coconut Milk, Onions, Garlic, Ginger",
      instructions: "Cook onions, garlic, and ginger. Add chicken and curry powder. Add coconut milk and simmer."
    }
  ];

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl">Recipes</h1>
      <div className="space-y-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="border p-4 rounded-md shadow-md">
            <h2 className="text-2xl">{recipe.title}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;