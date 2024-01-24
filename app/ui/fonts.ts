// this file to keep the fonts that will be used throughout your application.
import { Inter, Lusitana } from 'next/font/google';

// subset is used to limit the fonts that will be used

// primary font
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', //variable option to define your CSS variable name
  display: 'swap',
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lusitana', //variable option to define your CSS variable name
});


