"use client";
import React, { useState } from "react";
import Textarea from "react-textarea-autosize";

export default function TextToSpeech() {
  const [text, setText] = useState<string>("")
  const [audio, setAudio] = useState<string | null>(null)

  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const closeModal = () => {
    setAlertMessage(null);
  };

  const toSpeech = async () => {
    const response = await fetch('/dev/chatbot/tts/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text, download: false, dir: '' }),
    });
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });
    const url = URL.createObjectURL(blob);
    console.log('--------- audio -----------------');
    console.log(url);
    setAudio(url);
  }

  return (
    <main className="flex flex-col items-center justify-between pb-40">
      <div className="relative w-full max-w-screen-md px-4 pt-3 pb-2 bg-white border border-gray-200 shadow-lg rounded-xl sm:pb-3 sm:pt-4">
        <Textarea
          tabIndex={0} required rows={1} autoFocus
          placeholder="Send a message" value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              toSpeech();
              e.preventDefault();
            }
          }}
          spellCheck={false}
          className="w-full pr-10 focus:outline-none" />
      </div>

      {audio && (
        <audio src={audio} controls className="mt-4"></audio>
      )}

      <button onClick={toSpeech} className="btn btn-primary mt-4">
        Convert to Speech
      </button>

      {alertMessage && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Alert</h3>
            <p className="py-4">{alertMessage}</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}