import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="flex flex-0 bg-stone-100 h-16">
        <div className='limit w-full'>
          <div className="flex items-center justify-start px-2 font-bold text-stone-500 text-sm font-mono">
            <Link className="font-bold text-stone-700" href="/">nqcdan.rocks</Link>
            <span className="text-stone-500 inline-block animate-blink">▮</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className='flex flex-col flex-1 limit w-full no-list my-10 overflow-y-auto'>
        <div className='flex flex-col px-2'>
          <h1 className={`text-2xl text-left pt-8 my-4 ${lusitana.className}`}>Hello! I&apos;m Đàn!</h1>
          <p className='my-3 text-left'>Look like you&apos;ve found my space on the internet.</p>

          <ol className='m-1 text-left'>
            <li className='my-1'>
              <Link className="font-bold" href="/everyday">Everyday Learning</Link>: <i>Writing about what I learned everyday</i>
            </li>
            <li className='my-1'>
              <Link className="font-bold" href="/dev">Coding</Link>: <i>My journey to build a programming language skill!!</i>
            </li>
            <li className='my-1'>
              <Link className="font-bold" href="/looking-back">Looking Back</Link>: <i>...</i>
            </li>
          </ol>

          <p className='my-3'>In case you&apos;re interested, you can reach me <b><a target="_blank" href="mailto:linuss1908@gmail.com">via email</a></b> or <b><a target="_blank" href="https://github.com/ngcdan">visit my GitHub</a></b>
          </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-0  bg-stone-100 h-16">
        <div className="limit w-full">
          <div className="flex justify-between px-2 font-bold text-stone-500 text-sm font-mono">
            <p><a rel="me" href="https://masto.ai/@linuss1908@gmail.com">🐘 @dan</a></p>
            <div className="flex-1"></div>
            <div className="font-normal"><a href="/rss.xml">📮 RSS</a></div>
          </div>
        </div>
      </footer>

    </div>
  );
}
