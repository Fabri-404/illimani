import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Unbounded } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Illimani Constructora y Consultora | Precisión, Visión y Firmeza",
  description:
    "Elevamos tu proyecto con precisión, visión y la firmeza que nos define. Constructora y consultora líder en Bolivia especializada en arquitectura, ingeniería civil, y gestión de proyectos de alto nivel.",
  icons: {
    icon: "/img/illimaninegro.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${unbounded.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
