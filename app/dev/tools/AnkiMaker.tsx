import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField, MenuItem } from '@mui/material';
import { fetchDecks, fetchTags } from '@/app/api/anki';

const Bookmarklet = () => {
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

interface Options {
  deckName: string;
  modelName: string;
  prompt: string;
  tags: string[];
}

const AnkiCardCreator: React.FC = () => {
  const [decks, setDecks] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const [notes, setNotes] = useState<any[]>([]);
  const [deckName, setDeckName] = useState<string>("CS");
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  const [prompt, setPrompt] = useState<string>("");

  const [isSuggesting, setIsSuggesting] = useState<boolean>(false);
  const [suggestError, setSuggestError] = useState<Error | null>(null);

  const modelName = "Basic";
  const promptParam = "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [decksData, tagsData] = await Promise.all([fetchDecks(), fetchTags()]);
        setDecks(decksData);
        setTags(tagsData);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (promptParam.trim()) {
      suggestNotes({ deckName, modelName, tags: currentTags, prompt: promptParam });
    }
  }, [promptParam, deckName, currentTags]);

  const suggestNotes = async (options: Options) => {
    setIsSuggesting(true);
    setSuggestError(null);
    try {
      // Implementation for suggesting notes
      console.log('Suggesting notes with options:', options);
    } catch (error) {
      setSuggestError(error as Error);
    } finally {
      setIsSuggesting(false);
    }
  };

  const handleSuggestCards = () => {
    suggestNotes({ deckName, modelName, tags: currentTags, prompt });
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Anki Maker
          </h1>
          <p className="text-center text-sm md:text-lg opacity-90">
            Create Anki cards quickly and easily using AI.
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div className="form-control w-full flex flex-row">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text font-semibold">Deck</span>
              </label>
              <TextField
                select
                className="input input-bordered w-full"
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
              >
                {decks.map((deck) => (
                  <MenuItem key={deck} value={deck}>{deck}</MenuItem>
                ))}
              </TextField>
            </div>

            <div className="w-1/2 ml-4">
              <label className="label">
                <span className="label-text font-semibold">Tags</span>
              </label>
              <Autocomplete
                multiple
                id="tags"
                options={tags}
                value={currentTags}
                onChange={(_, value) => setCurrentTags(value)}
                renderInput={(params) => <TextField {...params} className="input input-bordered w-full rounded-md" />}
                freeSolo
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Prompt</span>
            </label>
            <TextField
              className="input input-bordered w-full"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt here..."
            />
          </div>

          <button
            className={`btn btn-primary w-full ${isSuggesting ? 'loading' : ''}`}
            onClick={handleSuggestCards}
            disabled={isSuggesting}
          >
            {isSuggesting ? 'Suggesting...' : 'Suggest Cards'}
          </button>

          {loading && (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}

          {error && (
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error.message}</span>
            </div>
          )}

          {suggestError && (
            <div className="alert alert-error">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{suggestError.message}</span>
            </div>
          )}

          {notes.length > 0 && (
            <div className="space-y-4">
              {notes.map((note, index) => (
                <div key={index} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    {/* Render note content here */}
                  </div>
                  <div className="card-actions justify-end p-4">
                    {/* Add actions for each note if needed */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-gray-100 p-6 mt-8">
          <Bookmarklet />
        </div>
      </div>
    </div>
  );
};

export default AnkiCardCreator;