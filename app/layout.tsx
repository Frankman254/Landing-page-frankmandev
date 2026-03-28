import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Urbanist } from "next/font/google"
import "./globals.css";
import BrandBackdrop from "@/components/brand/brand-backdrop";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { LanguageScript } from "@/components/language-script";
import Script from "next/script";
import { cookies, headers } from "next/headers";
import type { Language } from "@/lib/translations";
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

function resolveInitialLanguage(
  savedLanguage: string | undefined,
  acceptLanguage: string | null
): Language {
  if (savedLanguage === "es" || savedLanguage === "en") {
    return savedLanguage
  }

  if (acceptLanguage?.toLowerCase().includes("es")) {
    return "es"
  }

  return "en"
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies()
	const headerStore = await headers()
	const initialLanguage = resolveInitialLanguage(
		cookieStore.get("language")?.value,
		headerStore.get("accept-language")
	)

	return (
		<html lang={initialLanguage} suppressHydrationWarning>
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
				<Script
					id="language-script"
					strategy="beforeInteractive"
					dangerouslySetInnerHTML={{
						__html: `
            (function() {
              try {
                var savedLanguage = localStorage.getItem('language');
                var deviceLanguage = window.navigator.language ? window.navigator.language.toLowerCase() : '';
                var language = savedLanguage === 'es' || savedLanguage === 'en'
                  ? savedLanguage
                  : deviceLanguage.indexOf('es') === 0
                    ? 'es'
                    : '${initialLanguage}';

                document.documentElement.lang = language;
              } catch (e) {
                document.documentElement.lang = '${initialLanguage}';
              }
            })();
          `,
					}}
				/>
				<ThemeProvider>
        <LanguageProvider initialLanguage={initialLanguage}>
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
