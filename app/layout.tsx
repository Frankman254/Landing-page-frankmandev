import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Urbanist } from "next/font/google"
import "./globals.css";
import BrandBackdrop from "@/components/brand/brand-backdrop";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { LanguageScript } from "@/components/language-script";
import Script from "next/script";
const urbanist = Urbanist({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  metadataBase: new URL("https://landing-page-frankmandev.netlify.app"),
  title: "Francisco Rodriguez Salazar | Frankman Dev",
  description:
    "Full-Stack Software Developer focused on internal tools, process automation, web infrastructure, and production-ready systems.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand-mark.svg", sizes: "128x128", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Francisco Rodriguez Salazar | Frankman Dev",
    description:
      "Full-Stack Software Developer focused on internal tools, process automation, web infrastructure, and production-ready systems.",
    images: ["/brand-banner.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Rodriguez Salazar | Frankman Dev",
    description:
      "Full-Stack Software Developer focused on internal tools, process automation, web infrastructure, and production-ready systems.",
    images: ["/brand-banner.svg"],
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es" suppressHydrationWarning>
			<body className={urbanist.className} suppressHydrationWarning>
				<Script
					id="theme-script"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `
            (function() {
              try {
                var theme = localStorage.getItem('frankman-dev-theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `,
					}}
				/>
				<ThemeProvider>
        <LanguageProvider>
          <LanguageScript />
          <BrandBackdrop />
          <div className="relative">
            {children}
          </div>
        </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
