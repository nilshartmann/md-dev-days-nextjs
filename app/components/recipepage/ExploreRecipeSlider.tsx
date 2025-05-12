"use client";

import { use, useState } from "react";

import { ExploreRecipeDto } from "@/app/components/api-types.ts";
import ExploreRecipeBox from "@/app/components/recipepage/ExploreRecipeBox.tsx";
import { ArrowButton } from "@/app/components/Button.tsx";

type ExploreRecipesProps = {
  exploreRecipesPromise: Promise<ExploreRecipeDto[]>;
};

export default function ExploreRecipeSlider({
  exploreRecipesPromise,
}: ExploreRecipesProps) {
  const recipes = use(exploreRecipesPromise);
  const [selected, setSelected] = useState(0);

  const recipe = recipes[selected];

  const handleClick = (amount: number) => {
    const newSelected = selected + amount;
    setSelected(
      newSelected < 0
        ? recipes.length - 1
        : newSelected > recipes.length - 1
          ? 0
          : newSelected,
    );
  };

  return (
    <div className={"transform"}>
      <button
        className={"absolute left-2 top-2 z-10"}
        onClick={() => handleClick(-1)}
      >
        <ArrowButton direction={"left"} />
      </button>
      <ExploreRecipeBox recipe={recipe} />
      <button
        onClick={() => handleClick(+1)}
        className={"absolute right-2 top-2"}
      >
        <ArrowButton direction={"right"} />
      </button>
    </div>
  );
}
