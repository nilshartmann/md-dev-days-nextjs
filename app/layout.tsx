import type { Metadata } from "next";
import "./globals.css";
import RecipifyQueryProvider from "@/app/query-provider.tsx";
import GlobalNavBar from "@/app/components/layout/GlobalNavBar.tsx";
import { NewsletterRegistration } from "@/app/components/layout/NewsletterRegistration.tsx";
import Footer from "@/app/components/layout/Footer.tsx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recipify Next.js demo",
  description: "Recipes for hungry frontend devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="/fonts/google-fonts.css" rel="stylesheet" />
        <link href="/fontawesome/css/fontawesome.css" rel="stylesheet" />
        <link href="/fontawesome/css/brands.css" rel="stylesheet" />
        <link href="/fontawesome/css/regular.css" rel="stylesheet" />
        <link href="/fontawesome/css/solid.css" rel="stylesheet" />
        <title>Recipify Next.js Demo</title>
      </head>
      <body suppressHydrationWarning>
        <div className={"flex min-h-svh flex-col"}>
          <div className={"container mx-auto h-16"}>
            <div className={"flex h-full items-center justify-between"}>
              <Link
                href={"/"}
                prefetch={false}
                className={
                  "cursor-pointer text-gray-900 transition-all duration-500 ease-in-out hover:text-gray-400"
                }
              >
                <i className="fa-solid fa-house"></i>
              </Link>
              <NewsletterRegistration />
            </div>
          </div>

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
