import type { ReactNode } from "react";

import "./global.css";
import { JetBrains_Mono } from 'next/font/google'
import {Provider} from "@/components/provider";

const inter = JetBrains_Mono({
  subsets: ["latin"]
})


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body className="flex flex-col min-h-screen">
    <Provider>
      {children}
    </Provider>
    </body>
    </html>
  );
}