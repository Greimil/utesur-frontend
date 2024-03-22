import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});


const assistant_id = "asst_VvjBUWSbAj4c2pn2ITjOohwN";

async function FetchBot(chatMessages, setId) {
  // this function just create retrieve the assistant and create a Thread

  //  Get the assistant
  const myAssistant = await openai.beta.assistants.retrieve(assistant_id);

  // Create a thread
  const Thread = await openai.beta.threads.create();

  setId(Thread.id);
}

async function handleUserMessage(
  id,
  msg,
  chatMessages,
  setChatMessages,
  setIsChatbotTyping
) {
  // create threats
  const message = await openai.beta.threads.messages.create(id, {
    role: "user",
    content: msg,
  });

  // Create Run

  let run = await openai.beta.threads.runs.create(id, {
    assistant_id: assistant_id,
  });

  while (["queued", "in_progress", "cancelling"].includes(run.status)) {
    setIsChatbotTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    run = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);
  }

  if (run.status === "completed") {
    setIsChatbotTyping(false);
    const messages = await openai.beta.threads.messages.list(run.thread_id);
    let oldState = [...chatMessages]
    oldState.push(...messages.data.reverse())

    setChatMessages(oldState);
  } else {
    console.log(run.status);
  }
}

export { FetchBot, handleUserMessage };
