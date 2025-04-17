import './globals.css';
import Nav from './components/Nav';

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className="w-full bg-transparent overflow-hidden">
        <div className="main container mx-auto w-full h-full overflow-y-auto overflow-hidden">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
