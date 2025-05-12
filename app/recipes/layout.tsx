import { ReactNode } from "react";
import RecipesHeader from "@/app/components/layout/RecipesHeader.tsx";
import { Timer } from "@/app/components/Timer.tsx";
import BreakingNews from "@/app/components/BreakingNews.tsx";

type RecipesLayoutProps = {
  children: ReactNode;
};

export default function RecipesLayout({ children }: RecipesLayoutProps) {
  return (
    <>
      <RecipesHeader>
        <div
          className={
            "max-w-80 rounded-lg bg-goldgray/70 p-4 hover:bg-goldgray/80"
          }
        >
          <BreakingNews>
            Chef’s tip of the day: Master the art of seasoning. +++ Explore our
            latest collection of vegetarian recipes +++ Now trending:
            Plant-based meals everyone will love +++ Newest dishes to impress at
            your next dinner party
          </BreakingNews>
        </div>
      </RecipesHeader>
      <main className={"flex flex-grow flex-col justify-center"}>
        {children}
      </main>
    </>
  );
}
