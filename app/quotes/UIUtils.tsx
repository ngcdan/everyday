"use client"

import { useRouter } from 'next/navigation';

export const Bookmarklet = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Bookmarklet</h2>
      <p className="mt-2">We offer a bookmarklet so you can quickly highlight some text in your browser and go directly to suggesting cards. Drag the following link to your bookmarks:</p>
      <a
        id="bookmarklet"
        href="javascript:(function() { var selection = window.getSelection().toString(); var url = 'https://anki-card-creator.pages.dev/suggest?prompt=' + encodeURIComponent(selection); window.open(url, '_blank'); })();"
        className="text-blue-500 underline" >
        Suggest Anki cards
      </a>
    </div>
  );
};


export const SuggestCard = () => {
  const router = useRouter();
  return (
    <button type="button" className="max-w-xs mx-auto mt-5 border rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => router.push('/suggest')} >
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">Suggest cards with AI</h3>
      </div>
    </button>
  )
}