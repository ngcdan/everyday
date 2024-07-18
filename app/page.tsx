import Link from 'next/link';
import Image from 'next/image'
import { getSortedPostsData } from '../lib/post';

export default async function Page() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="flex flex-col mx-3 md:mx-0 px-4 md:px-8 lg:px-12">
      <div className="flex flex-col justify-center justify-items-center my-4">
        <Image className='my-2 mx-auto rounded-full'
          src="/images/avatar.jpg"
          height={144}
          width={144}
          alt="Avatar" />
        <h1 className={`my-2 text-2.5xl font-bold text-center`}>{`Jesse Livermore`}</h1>
      </div>

      <div className='text-base'>
        <p className={`my-4 pt-8 text-left text-2xl`}>
          Hello! I&apos;m Đàn!
        </p>
        <p className="my-3 text-left text-gray-800">
          Look like you&apos;ve found my space on the internet.
        </p>
      </div>

      <p className='mb-3'>
        I try to write down everything I learn, including some tools I develop. You can find them here.
      </p>

      <ol className="my-2 mx-3 px-2 list-decimal">
        <li className="mb-2">
          <Link className={`font-semibold`} href="/everyday" > Everyday : </Link>
          <span className='italic'>Writing about what I learn everyday.</span>
        </li>

        <li className="mb-2">
          <Link className={`font-semibold`} href="/tools" > Tools : </Link>
          <span className='italic'>All the tools I use.</span>
        </li>
        <li className="mb-2">
          <Link className={`font-semibold`} href="/looking-back" > Looking Back : </Link>
          <span className='italic'> Capturing the moments of of my life's journey.</span>
        </li>
        <li className="mb-2">
          <Link className={`font-semibold`} href="/rules" > Rules : </Link>
          <span className='italic'> A set of rules, processes, and goals that serve as a structured guide for my life..</span>
        </li>
      </ol>

      <section className={`text-lg py-1`}>
        <h2 className={'my-2 text-xl'}>Blog</h2>
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
