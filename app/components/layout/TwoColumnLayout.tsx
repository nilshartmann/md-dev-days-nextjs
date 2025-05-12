import { ReactNode } from "react";

type TwoColumnLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export default function TwoColumnLayout({
  children,
  sidebar,
}: TwoColumnLayoutProps) {
  return (
    <div className={"container mx-auto flex gap-x-24"}>
      <div className={"md:w-2/3"}>{children}</div>
      <div className={"md:w-1/3"}>{sidebar}</div>
    </div>
  );
}
