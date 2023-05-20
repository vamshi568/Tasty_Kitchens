import "./globals.css";
import { Providers } from "./globalredux/provider";

// import Router from "next/router";
export const metadata = {
  title: "Tasty Kitchens",
  description: "Tasty Kitchens is a Next.js-powered platform where users can search for restaurants, explore their menus, and conveniently place food orders. Discover a wide range of delicious dishes, add items to your cart, and make secure online payments. Enjoy the convenience of a simple login system to access personalized features and track your orders. Find your favorite restaurants and satisfy your cravings with Tasty Kitchens.",
};

export default function RootLayout({ children}) {
  
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/Frame274.svg" type="image/png"/>
      </head>

      <body>

      <Providers>
        

        {children}

        
      </Providers>
      </body>
    </html>
  );
}
