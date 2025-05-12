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
    await saveLike(recipe.id);

    // Next.js-Cache invalidieren
    revalidatePath("/recipes");
    revalidatePath(`/recipes/${recipe.id}`);
  }

  return (
    <form action={handleSubmit} className={"inline-block"}>
      <LikeButton likes={recipe.likes} />
    </form>
  );
}
