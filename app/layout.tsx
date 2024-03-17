import '@/components/ui/global.css';
import { poppins } from '@/components/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Le Ngoc Dan',
    default: 'Le Ngoc Dan',
  },
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="flex h-screen flex-col">
          {/* Header */}
          <header className="flex-0 flex h-16 bg-stone-100 text-stone-700">
            <div className="limit w-full flex items-center justify-start px-2 font-mono text-md">
              <a className="" href="/">
                nqcdan.rocks
              </a>
            </div>
          </header>

          {/* Main */}
          <main className="limit no-list my-10 flex w-full flex-1 flex-col overflow-y-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="flex-0 flex h-16 bg-stone-100 text-md text-stone-700 font-mono">
            <div className="limit w-full flex justify-between">
              <a rel="me" target="_blank" href="mailto:linuss1908@gmail.com">🐘 @dan</a>
              <a href="/rss.xml">📮 RSS</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
