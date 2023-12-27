import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image'
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  return (
    <div className='flex flex-col justify-center align-center'>
      <h1 className={`flex justify-center text-xl ${lusitana.className}`}>Hello! I'm Đàn!</h1>
      <p className="flex justify-center">Look like you've found my space on the internet.</p>
    </div>
  );
}
