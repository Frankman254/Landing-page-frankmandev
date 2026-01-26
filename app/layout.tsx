import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Urbanist } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { LanguageScript } from "@/components/language-script";
import Image from "next/image";
const urbanist = Urbanist({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Frankman Dev",
  description: "Landing Page by Frankman Dev",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/logo_frankmandev.png", sizes: "1536x1024", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo_frankmandev.png", sizes: "1536x1024", type: "image/png" },
    ],
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
        className={urbanist.className}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <LanguageProvider>
          <LanguageScript />
          {/* Banner full-width como fondo de página */}
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
            <Image 
              src="/banner.png" 
              alt="Banner Frankman Dev" 
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          {/* Contenido principal que empieza después del banner */}
          <div className="relative">
            {children}
          </div>
        </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
