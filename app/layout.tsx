import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
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
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col">
          {/* Header */}
          <header className="flex-0 flex h-16 bg-stone-100">
            <div className="limit w-full">
              <div className="flex items-center justify-start px-2 font-mono text-sm font-bold text-stone-500">
                <a className="font-bold text-stone-700" href="/">
                  nqcdan.rocks
                </a>
                <span className="animate-blink inline-block text-stone-500">
                  ▮
                </span>
              </div>
            </div>
          </header>

          {/* Main */}
          <main className="limit no-list my-10 flex w-full flex-1 flex-col overflow-y-auto">
            {children}
          </main>

          {/* Footer */}
          <footer className="flex-0 flex  h-16 bg-stone-100">
            <div className="limit w-full">
              <div className="flex justify-between px-2 font-mono text-sm font-bold text-stone-500">
                <p>
                  <a rel="me" href="https://masto.ai/@linuss1908@gmail.com">
                    🐘 @dan
                  </a>
                </p>
                <div className="flex-1"></div>
                <div className="font-normal">
                  <a href="/rss.xml">📮 RSS</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
