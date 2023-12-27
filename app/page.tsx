import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className='flex flex-col justify-center align-center'>
      <h1 className={`flex justify-center text-xl ${lusitana.className}`}>Hello! I am Đàn!</h1>
      <p className="flex justify-center">Look like you&apos;ve found my space on the internet.</p>
    </div>
  );
}
