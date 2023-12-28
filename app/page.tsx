import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-grow-0 justify-center items-center bg-stone-100 h-16">
        <div className="flex container-center items-center px-0 font-bold text-stone-500 text-sm font-mono">
          <a className="font-bold text-stone-700" href="/">nqcdan.rocks</a>
          <span className="text-stone-500 inline-block animate-blink">▮</span>
        </div>
      </div>

      <div className='flex flex-col flex-1 justify-center items-center no-list my-10'>
        <h1 className={`text-2xl test-left pt-8 my-4 ${lusitana.className}`}>Hello! I&apos;m Đàn!</h1>
        <p className='my-1'>Look like you&apos;ve found my space on the internet.</p>
        <p className='my-1'>In case you're interested, you can reach me <b><a target="_blank" href="mailto:linuss1908@gmail.com">via email</a></b> or <b><a target="_blank" href="https://github.com/ngcdan">visit my GitHub</a></b>
        </p>
      </div>

      <div className="flex flex-grow-0 justify-center items-center bg-stone-100 h-16">
        <div className="flex container-center items-center px-0 font-bold text-stone-500 text-sm font-mono">
          <p><a rel="me" href="https://masto.ai/@linuss1908@gmail.com">🐘 @dan</a></p>
          <div className="flex-1"></div>
          <div className="font-normal"><a href="/rss.xml">📮 RSS</a></div>
        </div>
      </div>

    </div>
  );
}
