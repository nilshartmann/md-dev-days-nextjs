import { notFound } from "next/navigation";

import RecipePageLayout from "@/app/components/recipepage/RecipePageLayout.tsx";
import { fetchRecipe } from "@/app/components/queries.ts";

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

  const recipe = await fetchRecipe(recipeId);
  if (!recipe) {
    return notFound();
  }

  return <RecipePageLayout recipe={recipe.recipe} />;
}
