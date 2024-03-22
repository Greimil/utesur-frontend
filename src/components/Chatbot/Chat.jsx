import { FetchBot } from "./chatFN";
import { useEffect } from "react";

import { useState } from "react";

import { ChatWindow } from "./ChatWindow";

export function Chat({ theme }) {
  const [Thread_id, setThread_id] = useState("");
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  // content[0].text.value
  const [chatMessages, setChatMessages] = useState([
    {
      content: [{text: ""}],
      role: "assistant",
    },
  ]);

  useEffect(() => {
    FetchBot(chatMessages, setThread_id);
  }, [chatMessages]);

  return (
    <ChatWindow
      theme={theme}
      messages={chatMessages}
      setIsChatbotTyping={setIsChatbotTyping}
      setChatMessages={setChatMessages}
      Thread_id={Thread_id}
      isChatbotTyping={isChatbotTyping}
    />
  );
}
