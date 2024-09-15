import React, { useEffect, useState } from 'react';
import {
  Alert, Autocomplete, Button, Card, CardActions, CardContent,
  CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, TextField
} from '@mui/material';
import { fetchDecks, fetchTags } from '@/app/api/anki';

const Bookmarklet = () => {
  return (
    <div className="p-1 md:p-4">
      <h2 className="text-lg md:text-xl font-bold">Bookmarklet</h2>
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

const AnkiMaker: React.FC = () => {
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

  return (
    <div className="container mx-auto p-2 md:p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
            Anki Maker
          </h1>
          <p className="text-center text-sm md:text-lg opacity-90">
            Create Anki cards quickly and easily using AI.
          </p>
        </div>
        <Grid container sx={{ padding: "25px", maxWidth: 1200 }} spacing={4} justifyContent="flex-start" direction="column" >
          {error ?
            <Alert severity="error" sx={{ marginTop: "20px", marginLeft: "25px", width: '100%' }}>
              Error: We can't connect to Anki using AnkiConnect.
              Please make sure Anki is running and you have the AnkiConnect plugin enabled, and that you have set the CORS settings.
            </Alert>
            : <></>}
          {suggestError ?
            <Alert severity="error" sx={{ marginTop: "20px", marginLeft: "25px", width: '100%' }}>
              Error: We can't connect to OpenAI. Ensure you have entered your OpenAI key correctly.
            </Alert>
            : <></>}

          <Grid container item direction="row" spacing={2} justifyContent="flex-start">
            <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="deck-label">Deck</InputLabel>
                <Select labelId="deck-label" label="Deck" id="deck" value={deckName}
                  onChange={e => { e.target.value && setDeckName(e.target.value) }} >
                  {decks && decks.map(deckName =>
                    <MenuItem key={"deck" + deckName} value={deckName}>{deckName}</MenuItem>)}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
              <FormControl fullWidth >
                <Autocomplete id="tags" multiple autoHighlight value={currentTags} options={tags || []}
                  onChange={(_, value) => { value && setCurrentTags(value) }} freeSolo
                  renderInput={(params) => <TextField label="Tags" {...params} />} />
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} >
              <FormControl fullWidth>
                <TextField id="prompt" label="Prompt" placeholder='Enter your prompt here...' maxRows={10} multiline value={prompt}
                  onChange={e => setPrompt(e.target.value)} />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button variant="outlined" color="primary" className='btn btn-primary' fullWidth disabled={isSuggesting}
                onClick={() => suggestNotes({ deckName, modelName, tags: currentTags, prompt })}>
                Suggest cards
              </Button>
            </Grid>
          </Grid>

          <Grid container item>
            {(loading || isSuggesting) && <CircularProgress />}
          </Grid>

          <Grid container item spacing={2} alignItems="stretch">
            {notes
              .filter(n => !n.trashed)
              .filter(n => !n.created)
              .map((note) =>
                <div key={note} className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    {/* Render note content here */}
                  </div>
                  <div className="card-actions justify-end p-4">
                    {/* Add actions for each note if needed */}
                  </div>
                </div>
              )}
          </Grid>

        </Grid>

        <div className="bg-gray-100 p-6 mt-8">
          <Bookmarklet />
        </div>
      </div>
    </div>
  );
};

export default AnkiMaker;