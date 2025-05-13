"use client";

import { ReactNode, use, useState } from "react";

import { ExploreRecipeDto } from "@/app/components/api-types.ts";
import ExploreRecipeBox from "@/app/components/recipepage/ExploreRecipeBox.tsx";
import { ArrowButton } from "@/app/components/Button.tsx";

type ExploreRecipesProps = {
  exploreRecipesPromise: Promise<ReactNode[]>;
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

  return <div className={"transform"}>{recipe}</div>;
}
