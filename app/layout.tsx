import '@/styles/global.css';
import { Search, Sun, Menu, Moon } from 'react-feather';
import { roboto } from '@/app/dev/lib/fonts';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'

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
    <html lang="en" data-theme="light">
      <body className={`${roboto.className} antialiased text-lg grid min-h-screen grid-rows-[auto_1fr_auto] bg-background text-foreground`}>
        <header className='sticky top-0 z-40 w-full border-b bg-background/75 backdrop-blur bg-stone-100 text-stone-700k'>
          <div className='container flex items-center h-12 p-4 mx-auto md:p-6 max-w-7xl'>
            <Link className="relative w-8 h-8 mr-2" href="/">
              <Image className='overflow-hidden rounded-full object-cover duration-300 ease-in-out group-hover:opacity-[85%]'
                src="/images/avatar.jpg"
                height={144}
                width={144}
                alt="Jesse" />
            </Link>

            <div className="hidden gap-2 ml-4 text-base md:flex text-thin">
              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/" >Home</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/everyday/posts" >Archive</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/everyday/snippets">Snippets</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/dev/tools">Tools</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/looking-back">Looking Back</Link>
            </div>

            <div className="flex items-center justify-end flex-1">
              <nav className="flex items-center space-x-2">
                <a href="/" className="relative inline-flex items-center justify-center w-8 h-8 p-0 transition-colors bg-transparent rounded-md hover:bg-gray-300 focus-visible:ring-1 focus-visible:ring-ring">
                  <Search size={24} strokeWidth={2} />
                </a>

                <label className="swap swap-rotate">
                  <input type="checkbox" />
                  <Sun size={24} className="swap-off" />
                  <Moon size={24} className="swap-on" />
                </label>

                <button type='button'
                  className="relative inline-flex items-center justify-center w-8 h-8 p-0 text-sm font-medium transition-colors bg-transparent rounded-md outline-none ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-300 md:hidden" >
                  <Menu size={24} strokeWidth={2} />
                </button>
              </nav>
            </div>

          </div>
        </header>


        <div className="flex flex-col grow w-full h-full mt-5 overflow-hidden">
          {children}
        </div>

      </body>
    </html>
  );
}
