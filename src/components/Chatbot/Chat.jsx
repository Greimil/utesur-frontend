import { FetchBot } from "./chatFN";
import { useEffect } from "react";
import { useState } from "react";
import { ChatWindow } from "./ChatWindow";
import { updateMsg } from "./chatFN";


export function Chat({ theme }) {
  const [Ids, SetIds] = useState({ Thread_id: "", Run_id: "" });
  const [isChatbotTyping, setIsChatbotTyping] = useState(false);
  const [status, setStatus] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    {
      content: [{ text: "" }],
      role: "assistant",
    },
  ]);

  useEffect(() => {
    FetchBot(chatMessages, SetIds);
    if (status) {
      console.log("estoy aqui dentro del useEffect")
      updateMsg(Ids,chatMessages,setChatMessages,setStatus)
    }

  }, [chatMessages, status]);

  return (
    <ChatWindow
      theme={theme}
      messages={chatMessages}
      status={status}
      setStatus={setStatus}
      setIsChatbotTyping={setIsChatbotTyping}
      setChatMessages={setChatMessages}
      Ids={Ids}
      SetIds={SetIds}
      isChatbotTyping={isChatbotTyping}
    />
  );
}
