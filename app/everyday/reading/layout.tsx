import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'reading',
};

export default function Layout({ children, }: { children: React.ReactNode }) {
  return (
    <div className="my-10">
      <p className='font-bold px-2'>
        <span className="arrow pull-back font-mono text-stone-500 text-sm px-1">←</span>
        <Link className="font-mono text-stone-500 text-sm" href="/everyday">All posts</Link>
      </p>
      <main className='my-5 px-3'>
        {children}
      </main>
    </div>
  );
}
