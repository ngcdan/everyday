"use client";

import { useEffect, useState } from 'react';

import {
  Alert, Autocomplete, Button, Card, CardActions, CardContent,
  CircularProgress, FormControl, Grid, InputLabel, MenuItem, Select, TextField
} from '@mui/material';

import { fetchDecks, fetchTags } from '@/app/api/anki';
import { Bookmarklet } from './UIUtils';

interface Options {
  deckName: string;
  modelName: string;
  prompt: string;
  tags: string[];
}

export default function Page() {
  const promptParam = ""

  const [decks, setDecks] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const [notes, setNotes] = useState<any[]>([]);
  const [deckName, setDeckName] = useState<string>("CS");
  const [currentTags, setCurrentTags] = useState<string[]>([]);
  const [prompt, setPrompt] = useState("");

  const modelName = "Basic";

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

  // State for managing suggestion process
  const [isSuggesting, setIsSuggesting] = useState<boolean>(false);
  const [suggestError, setSuggestError] = useState<Error | null>(null);

  // Function to suggest notes using OpenAI
  const suggestNotes = async (options: Options) => {
    // setIsSuggesting(true);
    // setSuggestError(null);
    // try {
    //   const newNotes = await suggestAnkiNotes(openAIKey, options, notes);
    //   setNotes((prevNotes) => [...prevNotes, ...newNotes]);
    // } catch (error) {
    //   setSuggestError(error as Error);
    // } finally {
    //   setIsSuggesting(false);
    // }
  };


  // If there's an initial prompt param, trigger suggestion
  useEffect(() => {
    if (promptParam.trim() !== "") {
      suggestNotes({ deckName, modelName, tags: currentTags, prompt: promptParam });
    }
  }, [promptParam])

  console.log('-------------');
  console.log(error);
  console.log(loading);
  console.log(decks);
  console.log(tags);

  return (
    <div className='container p-4 mx-auto mt-2 md:p-6'>
      <div className="p-4 max-w-2xl mx-auto">
        <p className="text-center text-xl">
          Anki Card Creator is a tool that helps you create Anki cards quickly and easily using AI.
        </p>

        <div className="mt-5">
          <Grid container sx={{ padding: "25px", maxWidth: 1200 }} spacing={4} justifyContent="flex-start" direction="column" >

            <Grid container item direction="column" spacing={2} justifyContent="flex-start">
              <Grid item>
                <FormControl fullWidth>
                  <InputLabel id="deck-label">Deck</InputLabel>
                  <Select labelId="deck-label" label="Deck" id="deck" value={deckName}
                    onChange={e => { e.target.value && setDeckName(e.target.value) }} >
                    {decks && decks.map(deckName =>
                      <MenuItem key={"deck" + deckName} value={deckName}>{deckName}</MenuItem>)}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item>
                <FormControl fullWidth>
                  <Autocomplete id="tags" multiple autoHighlight value={currentTags} options={tags || []}
                    onChange={(_, value) => { value && setCurrentTags(value) }} freeSolo
                    renderInput={(params) => <TextField label="Tags" {...params} />} />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl fullWidth>
                  <TextField id="prompt" label="Prompt" maxRows={10} multiline value={prompt}
                    onChange={e => setPrompt(e.target.value)} />
                </FormControl>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="info" disabled={false}
                  onClick={() => console.log('TODO')}>
                  Suggest cards
                </Button>
              </Grid>
            </Grid>
            <Grid container item>
              {(loading) && <CircularProgress />}
            </Grid>
            <Grid container item spacing={2} alignItems="stretch">

            </Grid>
          </Grid>

          <Bookmarklet />
        </div>
      </div>
    </div>
  );
}
