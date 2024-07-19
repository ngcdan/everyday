import Link from 'next/link';
import Image from 'next/image'
import { getSortedPostsData } from '../lib/post';

export default async function Page() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="flex flex-col max-w-4xl px-4 mx-auto text-lg">
      <div className="flex flex-col justify-center my-4 justify-items-center">
        <Image className='mx-auto my-2 rounded-full'
          src="/images/avatar.jpg"
          height={300}
          width={300}
          alt="Avatar" />
        <h1 className={`my-2 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl mx-auto`}>{`Jesse Livermore`}</h1>
      </div>

      <div className=''>
        <p className={`my-4 pt-8 text-left text-2xl font-semibold`}>
          Hello! I&apos;m Đàn!
        </p>
        <p className="my-3 text-left text-gray-800">
          Look like you&apos;ve found my space on the internet.
        </p>
      </div>

      <p className='mb-3'>
        I try to write down everything I learn, including some tools I develop. You can find them here.
      </p>

      <ol className="px-2 mx-3 my-2 list-decimal">
        <li className="mb-2">
          <Link className={`font-medium`} href="/everyday" > Everyday : </Link>
          <span className=''>Writing about what I learn everyday.</span>
        </li>

        <li className="mb-2">
          <Link className={`font-medium`} href="/tools" > Tools : </Link>
          <span className=''>All the tools I use.</span>
        </li>
        <li className="mb-2">
          <Link className={`font-medium`} href="/looking-back" > Looking Back : </Link>
          <span className=''> Capturing the moments of of my life's journey.</span>
        </li>
        <li className="mb-2">
          <Link className={`font-medium`} href="/rules" > Rules : </Link>
          <span className=''> A set of rules, processes, and goals that serve as a structured guide for my life..</span>
        </li>
      </ol>

      <section className={`py-1`}>
        <h2 className='my-5 text-2xl font-bold text-left text-gray-800'>Recently Added</h2>
        <ul className={'p-0 m-0 list-none'}>
          {allPostsData.map(({ id, date, title }: any) => (
            <li className={'mx-5'} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>

      <p className="my-3">
        In case you&apos;re interested, you can reach me via <a className='font-semibold' target="_blank" href="https://github.com/ngcdan">GitHub</a>.
      </p>
    </div >
  );
}
