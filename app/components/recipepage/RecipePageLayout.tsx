import { DetailedRecipeDto } from "@/app/components/api-types.ts";
import { ReactNode } from "react";
import { RecipeBanner } from "@/app/components/recipepage/RecipeBanner.tsx";
import { CookingTime } from "@/app/components/recipepage/CookingTime.tsx";
import IngredientsSection from "@/app/components/recipepage/IngredientsSection.tsx";
import { Instructions } from "@/app/components/recipepage/Instructions.tsx";
import { Sidebar } from "@/app/components/Sidebar.tsx";
import RecipeCookingDescription from "@/app/components/recipepage/RecipeCookingDescription.tsx";
import TwoColumnLayout from "@/app/components/layout/TwoColumnLayout.tsx";
import { SidebarBox } from "@/app/components/SidebarBox.tsx";

type RecipePageLayoutProps = {
  recipe: DetailedRecipeDto;
  sidebarTitle?: string;
  sidebar?: ReactNode;
};

export default function RecipePageLayout({
  recipe,
  sidebarTitle = "Explore Recipes",
  sidebar,
}: RecipePageLayoutProps) {
  return (
    <>
      <RecipeBanner recipe={recipe} />
      <TwoColumnLayout sidebar={!!sidebar && <Sidebar>{sidebar}</Sidebar>}>
        <RecipeCookingDescription recipe={recipe} />
      </TwoColumnLayout>
    </>
  );
}
