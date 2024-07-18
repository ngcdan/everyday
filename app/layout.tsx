import '@/styles/global.css';
import { roboto } from '@/lib/fonts';
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
      <body className={`${roboto.className} antialiased`}>
        <div className="flex flex-col h-screen w-full">
          <header className="h-16 bg-stone-100 text-stone-700">
            <div className="max-w-5xl mx-auto w-full h-full flex justify-between items-center">
              <a className="px-4 py-4" href="/">nqcdan.rocks</a>
            </div>
          </header>

          <main className="max-w-5xl mx-auto no-list w-full h-full grow flex flex-col overflow-y-auto">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
