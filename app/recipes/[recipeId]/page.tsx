import { notFound } from "next/navigation";

import RecipePageLayout from "@/app/components/recipepage/RecipePageLayout.tsx";
import { fetchExploreRecipes, fetchRecipe } from "@/app/components/queries.ts";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";

// -----------------------
//  rpage
// -----------------------

type RecipePageProps = {
  params: Promise<Record<string, string>>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { recipeId } = await params;

  const exploreRecipes = await fetchExploreRecipes(recipeId);
  const recipe = await fetchRecipe(recipeId);
  if (!recipe) {
    return notFound();
  }

  // ...

  return (
    <RecipePageLayout
      recipe={recipe.recipe}
      sidebar={
        <SidebarBox title={"Explore"}>
          <ExploreRecipeSlider exploreRecipes={exploreRecipes} />
        </SidebarBox>
      }
    />
  );
}
