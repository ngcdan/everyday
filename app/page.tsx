import Link from 'next/link';
import Image from 'next/image'

export default async function Page() {
  return (
    <div className="flex flex-col max-w-4xl px-4 mx-auto text-lg">
      <div className="flex flex-col items-center my-2">
        <Image className='rounded-full'
          src="/images/avatar.jpg"
          height={300}
          width={300}
          alt="Avatar" />
        <h1 className="my-2 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl"> Jesse Livermore </h1>
      </div>

      <div>
        <p className="pt-8 my-4 text-2xl font-semibold">
          Hello! I&apos;m Đàn!
        </p>
        <p className="my-3 text-gray-800">
          Look like you&apos;ve found my space on the internet.
        </p>
      </div>

      <p className="mb-3">
        I try to write down everything I learn, including some tools I develop. You can find them here.
      </p>

      <ol className="px-2 mx-3 my-2 list-decimal">
        <li className="mb-2">
          <Link className="font-medium" href="/everyday/posts/">Everyday : </Link>
          Writing about what I learn everyday.
        </li>

        <li className="mb-2">
          <Link className="font-medium" href="/dev/chatbot/anki">Anki Maker: </Link>
          AI chat bot built with GPT-4o-mini, and fine-tuned.
        </li>

        <li className="mb-2">
          <Link className="font-medium" href="/dev/tools">Tools : </Link>
          All the tools I use.
        </li>
      </ol>

      <p className="my-3">
        In case you&apos;re interested, you can reach me via <a className="font-semibold" target="_blank" href="https://github.com/ngcdan">GitHub</a>.
      </p>
    </div>
  );
}