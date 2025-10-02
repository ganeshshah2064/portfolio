import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/your-font.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* PWA Support */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Additional Meta Tags */}
        <meta name="author" content="Ganesh Shah" />
        <meta name="keywords" content="Ganesh Shah, Ganesh Shah Ithari, Ganesh Shah Nepal, Web Developer Nepal, Software Engineer Nepal" />
        <meta name="geo.region" content="NP" />
        <meta name="geo.placename" content="Ithari" />
        <meta name="geo.position" content="26.6637;87.2746" />
        <meta name="ICBM" content="26.6637, 87.2746" />
        
        {/* Canonical URL - Will be set dynamically in pages */}
        <link rel="canonical" href="https://ganeshsahu.com.np" />
      </Head>
      <body className="antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
