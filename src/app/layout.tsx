import type { Metadata } from "next";
import type { ReactNode } from "react";

import Head from 'next/head';

import { ThemeRegistry } from '@/design-system/ThemeRegistry';

export const metadata: Metadata = {
  title: "Marco Arias | Senior Software Engineer",
  description: "Software, rstrategia y entrega de resultados.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <Head>
        <link
          href="favicon.ico"
          rel="icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          href="favicon-2.ico"
          rel="icon"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
