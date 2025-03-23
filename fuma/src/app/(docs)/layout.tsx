import type { ReactNode } from "react";

import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { JetBrains_Mono } from 'next/font/google'

const inter = JetBrains_Mono({
  subsets: ["latin"]
})


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body className="flex flex-col min-h-screen">
    <RootProvider>
      {children}
    </RootProvider>
    </body>
    </html>
  );
}