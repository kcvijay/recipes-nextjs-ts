import type { Metadata } from 'next';
import { Manrope} from 'next/font/google';
import './globals.css';
import Footer from '@/UI/home/Footer';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Recipes App',
  description: 'Next.js & TypeScript Recipes App powered by DummyJSON API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${manrope.className} flex flex-col h-screen`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
