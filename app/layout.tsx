import type {Metadata} from "next";
import '@cloudscape-design/global-styles/index.css';
import {Providers} from "@/app/providers";
import {ReduxProvider} from "@/lib/providers";

export const metadata: Metadata = {
  title: "coffeeshot.com",
  description: "FX trading systems and utils",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className="antialiased">
    <ReduxProvider>
      <Providers>{children}</Providers>
    </ReduxProvider>
    </body>
    </html>
  )
}
