import OpenAI from 'openai'
import fs from 'fs-extra';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
})



export async function OPTIONS(_req: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
  return new Response(null, {
    status: 204,
    headers: headers,
  });
}

export async function POST(req: Request) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
  try {
    const { text, download, dir } = (await req.json()) as {
      text: string;
      download: boolean;
      dir: string;
    }

    const response = await openai.audio.speech.create({
      model: "tts-1",
      voice: "onyx",
      input: text,
    });

    if (!download) {
      return new Response(response.body, {
        headers: {
          "Content-Type": response.type,
        },
      })
    } else {
      const arrayBuffer = await response.arrayBuffer();
      const blob = new Blob([arrayBuffer], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);
      console.log('--------- audio -----------------');
      console.log(url);

      const date = new Date();
      const dateTimeID = date.toISOString().slice(0, 10).replace(/-/g, '');
      const randomString = Math.random().toString(36).substring(2, 8);
      const vocab = text.slice(0, 3).toUpperCase(); // Lấy 3 từ đầu làm tên
      const fileName = `${vocab}_${dateTimeID}_${randomString}.mp3`;

      let mediaDirPath = `/Users/linuss/Dev/projects/vocab`;
      if (dir) mediaDirPath = dir;
      const fullFilePath = path.join(mediaDirPath, fileName);
      console.log(fullFilePath);

      console.log('Saving to:', fullFilePath);
      await fs.outputFile(fullFilePath, Buffer.from(arrayBuffer));
      console.log('File saved successfully:', fullFilePath);
      return new Response(JSON.stringify({ fileName, filePath: fullFilePath }), { status: 200, headers });
    }
  } catch (error) {
    console.error('Error handling the request:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate or save audio' }), { status: 500, headers, });
  }
}

