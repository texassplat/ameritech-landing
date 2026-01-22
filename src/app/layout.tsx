import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ameritechwindows.com'),
  title: {
    default: 'Ameritech Windows | Denver Windows Installer',
    template: '%s | Ameritech Windows Denver',
  },
  description: 'Locally owned Denver windows installer and replacement. Serving the Front Range for 30+ years. BBB Accredited, free estimates, financing & warranties.',
  icons: {
    icon: 'https://www.ameritechwindows.com/wp-content/uploads/2019/09/cropped-favicon-300x300.png',
    apple: 'https://www.ameritechwindows.com/wp-content/uploads/2019/09/cropped-favicon-300x300.png',
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-video-preview': -1,
    'max-image-preview': 'large',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Ameritech Windows',
    title: 'Ameritech Windows | Denver Windows Installer',
    description: 'Locally owned Denver windows installer and replacement. Serving the Front Range for 30+ years. BBB Accredited, free estimates, financing & warranties.',
    images: [
      {
        url: 'https://www.ameritechwindows.com/wp-content/uploads/2020/04/Ameritech-Windows-triple-pane-windows-in-Denver.jpg',
        width: 1200,
        height: 792,
        alt: 'Logo for Ameritech Windows overlaid on a bright, modern room with large windows',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WSZ9M6ZS');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WSZ9M6ZS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
