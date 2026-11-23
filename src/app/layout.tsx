import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/common/ThemeProvider';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'GDG on Campus · RV College of Engineering',
  description:
    'Student developer community at RV College of Engineering exploring Cloud, Android apps, Web performance, and open source projects.',
  keywords: ['GDG', 'RVCE', 'Google Developer Groups', 'Software Engineering', 'Bangalore Developers'],
  authors: [{ name: 'GDG RVCE Community' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col font-sans bg-base text-text-main antialiased selection:bg-google-blue selection:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
