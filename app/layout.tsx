import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { DM_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Clarity from "@/components/Clarity";

export const metadata: Metadata = {
  title: "Ganesh Shah | Portfolio | Developer from Ithari, Nepal",
  description: "Personal portfolio of Ganesh Shah, a passionate developer from Ithari, Nepal. Explore my projects, skills, and experience in software development.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#000000' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: '#000000',
  keywords: [
    "Ganesh Shah",
    "Ganesh Shah Ithari",
    "Ganesh Shah Nepal",
    "Ganesh Shah Sushma Godawari",
    "Ganesh Shah Developer",
    "ganeshsahu.com.np",
    "Web Developer Nepal",
    "Software Engineer Nepal"
  ],
  metadataBase: new URL("https://ganeshsahu.com.np"),
  openGraph: {
    title: "Ganesh Shah | Portfolio | Developer from Ithari, Nepal",
    description: "Personal portfolio of Ganesh Shah, a passionate developer from Ithari, Nepal. Explore my projects, skills, and experience in software development.",
    url: "https://ganeshsahu.com.np",
    siteName: "Ganesh Shah",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ganesh Shah Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Shah | Portfolio | Developer from Ithari, Nepal",
    description: "Personal portfolio of Ganesh Shah, a passionate developer from Ithari, Nepal.",
    creator: "@yourtwitterhandle",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
    yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
  },
  alternates: {
    canonical: "https://ganeshsahu.com.np",
  },
};

const font = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "production" ? <Clarity /> : null}
      <body className={cn(font.className, "antialiased")}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
