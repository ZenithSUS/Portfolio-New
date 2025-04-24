import { Mistral } from "@mistralai/mistralai";
import { MistralChatResponse } from "../libs/types";

const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
const client = new Mistral({ apiKey: apiKey });
const model = "mistral-tiny-latest";

import { JERAN_CONTENT } from "../data/jeran-info";

const mistralContent = `You are a helpful assistant for a web developer's portfolio website. You ONLY respond based on the information explicitly provided in the developer's portfolio data you can answer in a positive and concise way. Do not make assumptions, guesses, or add additional information beyond what is given. dont give all of the information at once if asked, only output the relevant information.
Your main tasks include:
Answering questions about the developer's skills, projects, experience, and tools.
Guiding visitors through the portfolio content.
Offering explanations or summaries of the content that already exists.
Staying professional, helpful, and concise remove any mardowns or don't answer in markdown.
If a question is asked that cannot be answered based on the provided information, politely respond with:
"Sorry, I can only answer based on the information provided in this portfolio."
NEVER generate or assume new content. Your knowledge is strictly limited to what has been input.
This is the developer's portfolio data: ${JERAN_CONTENT}
`;

export default async function chatResponse(
  message: string,
  isStreaming = false,
  onChunk?: (chunk: string) => void
) {
  try {
    if (!message) {
      throw new Error("Message cannot be empty.");
    }

    if (isStreaming && onChunk) {
      await mistralChatStream(message, onChunk);
      return;
    }

    const data: MistralChatResponse = await mistralChat(message);
    if (!data) {
      throw new Error("No data received from Mistral API.");
    }
    return data;
  } catch (error) {
    console.error("Error in chatResponse:", error);
    throw error;
  }
}

async function mistralChatStream(
  message: string,
  onChunk: (chunk: string) => void
) {
  const response = await client.chat.stream({
    model: model,
    messages: [
      {
        role: "system",
        content: mistralContent,
      },
      {
        role: "user",
        content: message,
      },
    ],
    temperature: 0.7,
  });

  let fullResponse = "";

  for await (const chunk of response) {
    const content = chunk.data.choices[0].delta.content;
    if (content) {
      fullResponse += content;
      onChunk(content as string);
    }
  }

  return { content: fullResponse };
}

async function mistralChat(message: string) {
  const response = await client.chat.complete({
    model: model,
    messages: [
      {
        role: "system",
        content: mistralContent,
      },
      { role: "user", content: message },
    ],
    temperature: 0.7,
  });
  return response.choices?.[0].message as MistralChatResponse;
}
