import { notFound } from "next/navigation";

import RecipePageLayout from "@/app/components/recipepage/RecipePageLayout.tsx";
import {
  fetchExploreRecipes,
  fetchFeedback,
  fetchRecipe,
} from "@/app/components/queries.ts";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";
import { Suspense } from "react";
import LoadingIndicator from "@/app/components/LoadingIndicator.tsx";
import ExploreRecipeBox from "@/app/components/recipepage/ExploreRecipeBox.tsx";
import FeedbackList from "@/app/components/recipepage/FeedbackList.tsx";
import { AddFeedbackForm } from "@/app/components/recipepage/FeedbackForm.tsx";

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

  const feedbackPromise = fetchFeedback(recipeId);

  // KEIN WASSER FALL MEHR, DAFÜR GLOBAL LOADING INDICATOR
  // JETZT WIRD ExploreRecipeBox zur SERVER COMPONENT!
  const exploreRecipesPromise = fetchExploreRecipes(recipeId).then((recipes) =>
    recipes.map((r) => <ExploreRecipeBox key={r.id} recipe={r} />),
  );

  const recipe = await fetchRecipe(recipeId);
  if (!recipe) {
    return notFound();
  }

  return (
    <RecipePageLayout
      recipe={recipe.recipe}
      sidebar={
        <>
          <SidebarBox title={"Explore more"}>
            <Suspense fallback={<LoadingIndicator />}>
              <ExploreRecipeSlider
                exploreRecipesPromise={exploreRecipesPromise}
              />
            </Suspense>
          </SidebarBox>
          <SidebarBox title={"Feedback"}>
            <Suspense fallback={<LoadingIndicator />}>
              <FeedbackList feedbackPromise={feedbackPromise} />
              <AddFeedbackForm recipeId={recipeId} />
            </Suspense>
          </SidebarBox>
        </>
      }
    />
  );
}
