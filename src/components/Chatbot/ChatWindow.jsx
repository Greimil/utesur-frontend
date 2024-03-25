import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { useRef, useState } from "react";
import ChatIcon from "../icons/ChatIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import BrainICon from "../icons/BrainIcon";

export const ChatWindow = ({
  messages,
  setChatMessages,
  isChatbotTyping,
  onSend,
  theme,
  Ids,
  SetIds,
  setIsChatbotTyping,
  status,
  setStatus,
}) => {
  const chatWindowsRef = useRef(null);
  const [showChat, setShowChat] = useState(false); // Corregido: se cambió la asignación de setShowChat

  return (
    <>
      {showChat ? (
        <div
          ref={chatWindowsRef}
          className="fixed w-[100%]  h100svh sm:h-[460px] sm:w-[380px] overflow-hidden bg-[#EDEDED] dark:bg-[#222121] sm:right-8 bottom-0 sm:bottom-10 dark:bg border rounded-xl"
        >
          <div className="flex justify-between p-2 border-b bg-black ">
            <div className="flex gap-x-2 items-center">
              <div className="size-8 border rounded-full flex justify-center items-center">
                <BrainICon color={"white"} />{" "}
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-white">ByteBuddy</span>
                <span className="text-[11px] text-white">AI ChatBot</span>
              </div>
            </div>

            <button
              className="rotate-180"
              onClick={() => {
                setShowChat(false);
              }}
            >
              <ArrowUpIcon color={"white"} />
            </button>
          </div>
          <div className="rounded dark:bg-[#222121] relative h-full">
            <div className="flex flex-col justify-between h-full">
              <MessageList
                messages={messages}
                isChatbotTyping={isChatbotTyping}
                theme={theme}
              />
              <MessageInput
                onSend={onSend}
                setIsChatbotTyping={setIsChatbotTyping}
                theme={theme}
                status={status}
                setStatus={setStatus}
                setChatMessages={setChatMessages}
                messages={messages}
                Ids={Ids}
                SetIds={SetIds}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fixed right-6 bg-white dark:bg-[#222121]  bottom-24 sm:right-8 sm:bottom-28 flex justify-center items-center rounded-full h-10 w-14 border cursor-pointer gap-2"
          onClick={() => {
            setShowChat(true);
          }}
        >
          <ChatIcon color={theme === "light" ? "black" : "white"} />{" "}
          
        </div>
      )}
    </>
  );
};
