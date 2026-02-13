import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar'; // Import the new Navbar
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Photography',
  description: 'A modern gallery of my favorite photographs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Inside your RootLayout function...
  return (
    <html lang="en">
      {/* Added the background, text, and antialiased classes here! */}
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}