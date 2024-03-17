import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col mx-3 md:mx-0 px-4 md:px-8 lg:px-12">
      <h1 className={`my-4 pt-8 text-left text-2xl`}>
        Hello! I&apos;m Đàn!
      </h1>
      <p className="my-3 text-left">
        Look like you&apos;ve found my space on the internet.
      </p>

      <ol className="my-2 list-decimal">
        <li className="mb-2">
          <Link className={`font-semibold`} href="/text-editor"> Text Editor : </Link>
          <span className="italic">Try to building Rich Text Editor</span>
        </li>
        <li className="mb-2">
          <Link className={`font-semibold`} href="/everyday"> Everyday : </Link>
          <span className='italic'>Writing about what I learn everyday.</span> </li>
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
      <p className="my-3">
        In case you&apos;re interested, you can reach me via <a className='font-semibold' target="_blank" href="https://github.com/ngcdan">GitHub</a>.
      </p>
    </div>
  );
}
