import { fetchRecipes } from "@/app/components/queries.ts";
import RecipeList from "@/app/components/recipelistpage/RecipeList.tsx";
import { H1 } from "@/app/components/Heading.tsx";

export default async function RecipeListPage() {
  console.log(
    "RecipeListPage wird gerendert.",
    new Date().toLocaleTimeString(),
  );

  //

  const recipes = await fetchRecipes();

  return <RecipeList recipes={recipes} />;
}
