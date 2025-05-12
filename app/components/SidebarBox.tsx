import { ReactNode } from "react";
import { H2 } from "@/app/components/Heading.tsx";

type SidebarBoxProps = {
  title: string;
  children: ReactNode;
};

export function SidebarBox({ title, children }: SidebarBoxProps) {
  return (
    <div className={"border-1 mt-4 w-full rounded-2xl bg-goldgray px-4 py-8"}>
      <div className={"mb-8 flex justify-center"}>
        <H2>{title}</H2>
      </div>
      {children}
    </div>
  );
}
