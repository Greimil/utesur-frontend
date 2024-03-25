import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true,
});

const userLanguage = navigator.language || navigator.userLanguage;

const assistant_id = !(userLanguage === "en-US") ? "asst_vK2NkCmfNoOIxGpZuyGenMmq" : "asst_VvjBUWSbAj4c2pn2ITjOohwN"

async function FetchBot(chatMessages, setId, Ids) {
  // Create a thread
  let Thread = await openai.beta.threads.create();

  setId({ ...Ids, Thread_id: Thread.id });
}

async function handleUserMessage(
  Ids,
  setIds,
  msg,
  chatMessages,
  setChatMessages,
  setIsChatbotTyping,
  setStatus
) {
  // create msg
  const message = await openai.beta.threads.messages.create(Ids.Thread_id, {
    role: "user",
    content: msg,
  });

  // add message to state
  let msgState = [...chatMessages];
  msgState.push(message);
  setChatMessages(msgState);

  // Create Run
  let run = await openai.beta.threads.runs.create(Ids.Thread_id, {
    assistant_id: assistant_id,
  });

  setIds({ ...Ids, Run_id: run.id });
  while (["queued", "in_progress", "cancelling"].includes(run.status)) {
    setIsChatbotTyping(true);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 second
    run = await openai.beta.threads.runs.retrieve(run.thread_id, run.id);
  }

  if (run.status === "completed") {
    setIsChatbotTyping(false);
    setStatus(true);
  } else {
    console.log(run.status);
  }
}

async function updateMsg(Ids, chatMessages, setChatMessages, setStatus) {
  const run = await openai.beta.threads.runs.retrieve(
    Ids.Thread_id,
    Ids.Run_id
  );
  const messages = await openai.beta.threads.messages.list(run.thread_id);
    
  let response = [...chatMessages];
  response.push(messages.data[0]);
  setChatMessages(response);
  setStatus(false);
}

export { FetchBot, handleUserMessage, updateMsg };
