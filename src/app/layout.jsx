import './globals.css';
import Nav from './components/Nav';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://fares-portfolio.vercel.app'),
  title: 'FARES.PORTFOLIO',
  description: 'Check out this cool site by Fares.',
  keywords: ['Next.js', 'SEO', 'Fares', 'Cool Website', 'FARES.PORTFOLIO', 'portfolio'],
  openGraph: {
    title: 'FARES.PORTFOLIO',
    description: 'Check out this cool site by Fares.',
    url: '/',
    siteName: 'FARES.PORTFOLIO',
    images: [
      {
        url: '/images/ME2_converted.webp',
        width: 800,
        height: 600,
        alt: 'Fares Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FARES.PORTFOLIO',
    description: 'Check out this cool site by Fares.',
    images: ['/images/ME2_converted.webp'],
  },
  icons: {
    icon: '/images/ME2_converted.webp',
  },
};
//G-JKC0JVH108
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Load GA library */}
        {GA_ID && (
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
        )}

        {/* Initialize GA */}
        {GA_ID && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        )}
      </head>
      <body className="w-full bg-transparent overflow-hidden">
        <div className="main container mx-auto w-full h-full overflow-y-auto overflow-hidden">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
