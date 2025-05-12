import { notFound } from "next/navigation";

import RecipePageLayout from "@/app/components/recipepage/RecipePageLayout.tsx";
import { fetchExploreRecipes, fetchRecipe } from "@/app/components/queries.ts";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";

// -----------------------
//  rpage
// -----------------------

//  BEIDE ROUTEN AUSSCHLIESSLICH SERVER COMPONENTS!
//  TROTZDEM BLEIBT DER STATE ERHALTEN:
//    -> Newsletter Subscription
//    -> Breaking News (in demo-config einschalten!)

type RecipePageProps = {
  params: Promise<Record<string, string>>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  const { recipeId } = await params;

  // KEIN WASSER FALL MEHR, DAFÜR GLOBAL LOADING INDICATOR
  const exploreRecipesPromise = fetchExploreRecipes(recipeId);

  const recipe = await fetchRecipe(recipeId);
  if (!recipe) {
    return notFound();
  }

  return (
    <RecipePageLayout
      recipe={recipe.recipe}
      sidebar={
        <SidebarBox title={"Explore"}>
          <ExploreRecipeSlider exploreRecipesPromise={exploreRecipesPromise} />
        </SidebarBox>
      }
    />
  );
}
