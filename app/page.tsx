import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts'
import Image from 'next/image'

export default function Page() {
  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-12'>
      <h1 className={`text-2xl text-left pt-8 my-4 ${lusitana.className} antialiased`}>Hello! I&apos;m Đàn!</h1>
      <p className='my-3 text-left'>Look like you&apos;ve found my space on the internet.</p>
      <div className='my-2'>
        <Image
          src="/images/looking-back.webp"
          width={960}
          height={678}
          className='hidden md:block'
          alt="Keep it simple, stupid" />
      </div>

      <ul className='m-1 text-left'>
        <li className='my-1'>
          <Link className='font-bold' href="/rules"> Rules
          </Link>: <i> a set of rules, processes, and goals that serve as a structured guide for my life.</i>
          <p className="italic">It helps me maintain focus and navigate through life with flexibility and efficiency,
            ensuring a well-organized and purposeful approach to various aspects of my journey.
          </p>
        </li>
        <li className='my-1'>
          <Link className="font-bold" href="/everyday"> Everyday Learning </Link>: <i>Writing about what I learn everyday.</i>
        </li>
        <li className='my-1'>
          <Link className="font-bold" href="/dev">Coding</Link>: <i>My journey to build programming language skill!!</i>
        </li>

        <li className='my-1'>
          <Link className="font-bold" href="/tools">Tools</Link>: <i>All the tools I use.</i>
        </li>
        <li className='my-1'>
          <Link className="font-bold" href="/looking-back">Looking Back</Link>: <i> Capturing the moments of of my life's journey.</i>
        </li>
      </ul>

      <p className='my-3'>In case you&apos;re interested, you can reach me{' '}
        <b><a target="_blank" href="mailto:linuss1908@gmail.com">via email</a></b> or{' '}
        <b><a target="_blank" href="https://github.com/ngcdan">visit my GitHub</a></b>
      </p>
    </div >
  );
}
