import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className='container mx-auto flex flex-col items-center justify-center'>
      <h1 className={`flex justify-center text-xl pt-8 ${lusitana.className}`}>Hello! I&apos;m Đàn!</h1>
      <p className="flex justify-center">Look like you&apos;ve found my space on the internet.</p>
    </div>
  );
}
