import { RecipeDto } from "@/app/components/api-types.ts";
import { revalidatePath } from "next/cache";
import { saveLike } from "@/app/components/queries.ts";
import LikeButton from "@/app/components/LikeButton.tsx";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  async function handleSubmit() {
    "use server";
    console.log("todo: IMPLEMENT LIKE FORM SUBMIT", recipe.id);

    // WAS PASSIERT, WENN WIR JAVASCRIPT AUSSCHALTEN????

    await saveLike(recipe.id);

    revalidatePath("/recipes");
    revalidatePath(`/recipes/${recipe.id}`);
  }

  return (
    <form className={"inline-block"} action={handleSubmit}>
      <LikeButton likes={recipe.likes} />
    </form>
  );
}
