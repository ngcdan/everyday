// this file to keep the fonts that will be used throughout your application.
import { Poppins, Merriweather } from 'next/font/google'

// subset is used to limit the fonts that will be used
// primary font
export const poppins = Poppins({
   weight: ['200', '400', '500','600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins', //variable option to define your CSS variable name
});

export const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather', //variable option to define your CSS variable name
});


