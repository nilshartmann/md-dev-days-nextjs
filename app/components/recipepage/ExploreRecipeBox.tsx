import Link from "next/link";

import { ExploreRecipeDto } from "@/app/components/api-types.ts";
import { H3 } from "@/app/components/Heading.tsx";

type ExploreRecipeBoxProps = {
  recipe: ExploreRecipeDto;
};

export default function ExploreRecipeBox({ recipe }: ExploreRecipeBoxProps) {
  // WO WIRD DIESE KOMPONENTE GERENDERT?
  console.log("ExploreRecipeBox", new Date().toLocaleTimeString());

  return (
    <div
      className={"border-teal rounded-lg"}
      style={{
        "--recipe-bg-image": `url('/images/recipes/food_${recipe.id}.png')`,
      }}
    >
      <div className={"transform"}>
        <div className={"overflow-hidden"}>
          <img
            className="h-48 max-h-full w-full max-w-full transform rounded object-cover"
            src={`/images/recipes/food_${recipe.id}.png`}
            alt={recipe.title}
          />

          <div className={"absolute bottom-2 w-full"}>
            <div
              className={
                "mx-2 flex justify-center rounded-lg bg-white/90 p-2 text-center"
              }
            >
              <Link
                href={`/recipes/${recipe.id}`}
                prefetch={false}
                className={"hover:underline"}
              >
                <H3>{recipe.title}</H3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
