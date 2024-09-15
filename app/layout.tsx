import '@/styles/global.css';
import { Search, Sun, Menu, Moon } from 'react-feather';
import { roboto } from '@/app/dev/lib/fonts';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'
import MobileMenuToggle from '../ui-lib/MobileMenuToggle';

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
    <html lang="en" className={`h-full ${roboto.className} antialiased`} data-theme="light">
      <body className={`bg-gray-100 text-gray-800 min-h-screen flex flex-col bg-background text-foreground`}>

        <header className='bg-white sticky top-0 z-40 shadow-md'>

          <div className='container mx-auto px-4'>
            <div className="flex justify-between items-center py-3">
              <div className="flex items-center">
                <Link href="/" className="relative w-8 h-8 mr-2">
                  <Image
                    className='rounded-full object-cover transition-opacity duration-300 ease-in-out hover:opacity-85'
                    src="/images/avatar.jpg"
                    height={144}
                    width={144}
                    alt="Jesse"
                  />
                </Link>

                <nav className="hidden gap-2 ml-4 md:flex">
                  {[
                    { href: "/", label: "Home" },
                    { href: "/everyday/posts", label: "Archive" },
                    { href: "/dev/tools", label: "Tools" },
                    { href: "/looking-back", label: "Looking Back" }
                  ].map(({ href, label }) => (
                    <Link key={href} href={href}
                      className='px-3 py-2 rounded-md font-medium text-gray-700 dark:text-dark-secondary hover:text-gray-900 dark:hover:text-dark-primary hover:bg-gray-100 dark:hover:bg-gray-700'>
                      {label}
                    </Link>
                  ))}
                </nav>

              </div>

              <div className="flex items-center">
                <nav className="flex items-center space-x-2">
                  <a href="/" className="p-2 rounded-md hover:bg-gray-300">
                    <Search size={24} strokeWidth={2} />
                  </a>

                  <label className="swap swap-rotate">
                    <input type="checkbox" />
                    <Sun size={24} className="swap-off" />
                    <Moon size={24} className="swap-on" />
                  </label>

                  <MobileMenuToggle />
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 flex-grow overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
          {children}
        </main>

      </body>
    </html>
  );
}
