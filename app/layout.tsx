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
    <html lang="en" className="h-full" data-theme="light">
      <body className={`${roboto.className} antialiased grid min-h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground`}>
        <header className='sticky top-0 z-40 w-full border-b bg-background/75 backdrop-blur bg-stone-100 text-stone-700'>
          <div className='container flex items-center h-12 p-4 mx-auto md:p-6 max-w-7xl'>

            <Link className="relative w-8 h-8 mr-2" href="/">
              <Image className='overflow-hidden rounded-full object-cover duration-300 ease-in-out group-hover:opacity-[85%]'
                src="/images/avatar.jpg"
                height={144}
                width={144}
                alt="Jesse" />
            </Link>

            <div className="hidden gap-2 ml-4 md:flex">
              <Link className='px-4 py-2 rounded-full hover:bg-gray-300' href="/" >Home</Link>
              <Link className='px-4 py-2 rounded-full hover:bg-gray-300' href="/everyday/posts" >Archive</Link>
              <Link className='px-4 py-2 rounded-full hover:bg-gray-300' href="/everyday/snippets">Snippets</Link>
              <Link className='px-4 py-2 rounded-full hover:bg-gray-300' href="/dev/tools">Tools</Link>
              <Link className='px-4 py-2 rounded-full hover:bg-gray-300' href="/looking-back">Looking Back</Link>
            </div>

            <div className="flex items-center justify-end flex-1">
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

                {/* <button type="button" className="p-2 rounded-md hover:bg-gray-300 md:hidden">
                  <Menu size={24} strokeWidth={2} />
                </button> */}
              </nav>
            </div>
          </div>
        </header>

        <div className="flex flex-col w-full h-full overflow-hidden grow">
          {children}
        </div>

      </body>
    </html>
  );
}
