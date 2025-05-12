import {
  fetchExploreRecipes,
  fetchFeedback,
  fetchRecipe,
} from "@/app/components/queries.ts";
import RecipePageContent from "@/app/components/recipepage/RecipePageContent.tsx";
import { notFound } from "next/navigation";
import RecipePageLayout from "@/app/components/recipepage/RecipePageLayout.tsx";
import FeedbackList from "@/app/components/recipepage/FeedbackList.tsx";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";
import ExploreRecipeBox from "@/app/components/recipepage/ExploreRecipeBox.tsx";
import ExploreRecipeSlider from "@/app/components/recipepage/ExploreRecipeSlider.tsx";

type RecipePageProps = {
  params: Promise<{
    recipeId: string;
  }>;
};

export default async function RecipePage({ params }: RecipePageProps) {
  //
  // !! Das hier ist SERVER-SEITIGER Code !!
  //

  const { recipeId } = await params;

  const feedbackPromise = fetchFeedback(recipeId);

  const exploreRecipesPromise = fetchExploreRecipes(recipeId);

  const result = await fetchRecipe(recipeId);

  if (!result) {
    notFound();
  }

  return (
    <RecipePageLayout
      recipe={result.recipe}
      sidebar={
        <>
          <SidebarBox title={"Explore more"}>
            <ExploreRecipeSlider
              exploreRecipesPromise={exploreRecipesPromise}
            />
          </SidebarBox>
          {/*<SidebarBox title={"Feedback"}>*/}
          {/*  <FeedbackList feedbackPromise={feedbackPromise} />*/}
          {/*</SidebarBox>*/}
        </>
      }
    />
  );

  // return (
  //   <RecipePageContent
  //     recipe={result.recipe}
  //     feedbackPromise={feedbackPromise}
  //   />
  // );
}
