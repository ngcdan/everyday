import '@/styles/global.css';
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
          <div className='container flex items-center h-12 p-4 mx-auto md:p-6 max-w-7xl '>
            <a aria-label="Home" className="relative w-8 h-8 mr-2" href="/">
              <Image className='overflow-hidden rounded-full object-cover duration-300 ease-in-out group-hover:opacity-[85%]'
                src="/images/avatar.jpg"
                height={144}
                width={144}
                alt="Jesse" />
            </a>
            <div className="hidden gap-2 ml-4 md:flex">
              <Link className={``} href="/everyday" >Home</Link>
              <Link className={``} href="/everyday" >About</Link>
              <Link className={``} href="/everyday" >Archive</Link>
              <Link className={``} href="/everyday" >Snippets</Link>
              <Link className={``} href="/everyday" >Quotes</Link>
            </div>
            <div className="flex items-center justify-end flex-1">

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
