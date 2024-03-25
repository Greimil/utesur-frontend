import { useRef } from "react";
import SendIcon from "../icons/SendIcon";
import { handleUserMessage } from "./chatFN";

export const MessageInput = ({
  theme,
  Ids,
  SetIds,
  messages,
  setChatMessages,
  setIsChatbotTyping,
  
  setStatus,
}) => {
  const input = useRef(null);

  return (
    <div className="absolute bottom-[55px] w-full bg-[#000000]  h-12 flex border-t">
      <input
        ref={input}
        className="w-[80%] h-full px-2 outline-none dark:bg-[#222121] dark:text-white"
        type="text"
        placeholder="Type Message here"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value !== "") {
            e.preventDefault();

            handleUserMessage(
              Ids,
              SetIds,
              input.current.value,
              messages,
              setChatMessages,
              setIsChatbotTyping,
              setStatus
            );

            e.target.value = "";
          }
        }}
      />
      <button
        onClick={() => {
          if (input.current.value !== "") {
            handleUserMessage(
              Ids,
              SetIds,
              input.current.value,
              messages,
              setChatMessages,
              setIsChatbotTyping,
              setStatus
            );

            input.current.value = "";
          }
        }}
        className="flex justify-center items-center bg-black w-[20%] h-full"
      >
        <SendIcon color={"white" } />
      </button>
    </div>
  );
};
