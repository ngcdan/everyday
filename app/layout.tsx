import '@/styles/global.css';
import { Search, Sun } from 'react-feather';
import { roboto } from '@/lib/fonts';
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
    <html lang="en">
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
                href="/about" >About</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/everyday" >Archive</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/snippets">Snippets</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/quotes" >Quotes</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/tools">Tools</Link>

              <Link
                className={`block select-none space-y-1 rounded-full px-4 py-2
                leading-none no-underline outline-none transition-colors hover:bg-gray-300 focus:bg-gray-300`}
                href="/looking-back">Looking Back</Link>

            </div>
            <div className="flex items-center justify-end flex-1">
              <nav className="flex items-center space-x-2">
                <a href="/" className="relative inline-flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors bg-transparent rounded-md re items ring-offset-background">
                  <Search size={24} strokeWidth={2} />
                </a>

                <button className="inline-flex items-center justify-center w-8 h-8 text-sm font-medium transition-colors rounded-md items ring-offset-background">
                  <Sun size={24} strokeWidth={2} />
                </button>
              </nav>

            </div>
          </div>
        </header>


        <div className="container p-4 mx-auto mt-6 md:p-6 md:mt-12">
          <main className="flex flex-col w-full h-full mx-auto overflow-y-auto no-list grow">
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}
