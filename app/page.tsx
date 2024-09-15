import Link from 'next/link';
import Image from 'next/image'

export default async function Page() {
  return (
    <div className="max-w-3xl w-full mx-auto">
      <header className="flex flex-col items-center my-2">
        <Image
          className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px]"
          src="/images/avatar.jpg"
          width={200}
          height={200}
          alt="Avatar" />

        <div className="flex justify-center space-x-6 mt-5">
          <a href="https://github.com/ngcdan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ngcdan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://www.facebook.com/nqcdan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="mailto:linuss1908@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path fillRule="evenodd" d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </header>

      <main className='px-4 py-8 text-lg'>

        <section className="mb-6">
          <h2 className="pt-8 text-2xl font-semibold">Hello! I&apos;m Đàn!</h2>
          <p className="my-3 text-gray-800">
            Looks like you&apos;ve found my space on the internet.
          </p>
          <p className="mb-3">
            I try to write down everything I learn, including some tools I develop. You can find them here.
          </p>
        </section>

        <nav>
          <ol className="px-2 mx-3 my-2 list-decimal text-md">
            <li className="mb-2">
              <Link className="font-medium" href="/everyday/posts/">Everyday: </Link>
              Writing about what I learn everyday.
            </li>
            <li className="mb-2">
              <Link className="font-medium" href="/dev/chatbot/anki">Anki Maker: </Link>
              Tools to make Anki flashcards easier.
            </li>
            <li className="mb-2">
              <Link className="font-medium" href="/dev/tools">Tools: </Link>
              All the tools I use.
            </li>
          </ol>
        </nav>

        <footer className="my-3">
          In case you&apos;re interested, you can reach me via{" "}
          <a className="font-semibold" target="_blank" href="https://github.com/ngcdan" rel="noopener noreferrer">
            GitHub
          </a>.
        </footer>
      </main>

    </div>
  );
}