import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'looking-back',
};

export default function Page() {
  return (
    <div>
      <h2 className='my-5 text-xl text-left'>
        Looking back
      </h2>
      <p>Below are all my public journal entries.</p>
    </div>
  );
}
