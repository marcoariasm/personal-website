import type { Metadata } from "next";
import type { ReactNode } from "react";

import { ThemeRegistry } from "@/design-system/ThemeRegistry";

export const metadata: Metadata = {
  title: "Marco Arias | Software Engineer",
  description: "Portafolio profesional de desarrollo de software.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
