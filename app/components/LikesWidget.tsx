import { RecipeDto } from "@/app/components/api-types.ts";
import { revalidatePath } from "next/cache";
import { saveLike } from "@/app/components/queries.ts";
import LikeButton from "@/app/components/LikeButton.tsx";

type LikesWidgetProps = {
  recipe: RecipeDto;
};

export function LikesWidget({ recipe }: LikesWidgetProps) {
  async function handleSubmit() {
    console.log("todo: IMPLEMENT LIKE FORM SUBMIT", recipe.id);
  }

  return (
    <form className={"inline-block"}>
      <LikeButton likes={recipe.likes} />
    </form>
  );
}
