import { fetchRecipes } from "@/app/components/queries.ts";
import RecipeList from "@/app/components/recipelistpage/RecipeList.tsx";

type RecipeListPageProps = {
  searchParams: Promise<{ page?: number }>;
};

export default async function RecipeListPage({
  searchParams,
}: RecipeListPageProps) {
  const { page } = await searchParams;
  const recipes = await fetchRecipes(page);

  return <RecipeList recipes={recipes} />;
}
