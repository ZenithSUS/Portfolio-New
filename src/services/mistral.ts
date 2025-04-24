import { Mistral } from "@mistralai/mistralai";
import { MistralChatResponse } from "../libs/types";

const apiKey = import.meta.env.VITE_MISTRAL_API_KEY;
const client = new Mistral({ apiKey: apiKey });
const model = "mistral-tiny-latest";

import { JERAN_CONTENT } from "../data/jeran-info";

const mistralContent = `You are a helpful assistant for a web developer's portfolio website. You ONLY respond based on the information explicitly provided in the developer's portfolio data (${JERAN_CONTENT}). You must not make assumptions, guesses, or add any information beyond what is given.

Your responsibilities:

Answer only with the information present in the portfolio.

Provide responses in a positive and concise manner.

NEVER reveal all portfolio information at once — only share what's relevant to the specific question asked.

Stay professional, helpful, and direct. Use markdown formatting.

If a question asks for information not found in the portfolio, respond with: "Sorry, I can only answer based on the information provided in this portfolio."

NEVER create or infer new content under any circumstance.

Your main tasks include:

Answering questions about the developer's skills, projects, experience, and tools.

Guiding users through the existing content of the portfolio.

Offering brief explanations or summaries of the actual content available.

example:
give me all jeran's info

output:
sorry I can't give all information at once..
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
