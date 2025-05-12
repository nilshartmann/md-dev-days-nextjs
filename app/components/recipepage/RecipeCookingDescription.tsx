import { DetailedRecipeDto } from "@/app/components/api-types.ts";
import { CookingTime } from "@/app/components/recipepage/CookingTime.tsx";
import IngredientsSection from "@/app/components/recipepage/IngredientsSection.tsx";
import { Instructions } from "@/app/components/recipepage/Instructions.tsx";

type RecipeCookingDescriptionProps = {
  recipe: DetailedRecipeDto;
};

export default function RecipeCookingDescription({
  recipe,
}: RecipeCookingDescriptionProps) {
  return (
    <>
      <CookingTime
        cookTime={recipe.cookTime}
        preparationTime={recipe.preparationTime}
      />
      <IngredientsSection ingredients={recipe.ingredients} />
      <Instructions recipe={recipe} />
    </>
  );
}
