// this file to keep the fonts that will be used throughout your application.
import { Merriweather, Roboto } from 'next/font/google'

// subset is used to limit the fonts that will be used
// primary font
export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700', '900']
});

export const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather', //variable option to define your CSS variable name
});


