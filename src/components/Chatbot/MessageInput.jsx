import { useRef } from "react";
import SendIcon from "../icons/SendIcon";
import { handleUserMessage } from "./chatFN";

export const MessageInput = ({
  theme,
  Thread_id,
  messages,
  setChatMessages,
  setIsChatbotTyping,
}) => {
  const input = useRef(null);

  return (
    <div className="absolute bottom-[37px] w-full bg-[#000000] dark:bg-[#222121] h-12 flex border">
      <input
        ref={input}
        className="w-[80%] h-full px-2 outline-none"
        type="text"
        placeholder="Type Message here"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value !== "") {
            e.preventDefault();

            handleUserMessage(
              Thread_id,
              input.current.value,
              messages,
              setChatMessages,
              setIsChatbotTyping
            );
            e.target.value = "";
          }
        }}
      />
      <button
        onClick={() => {
          if (input.current.value !== "") {
            handleUserMessage(
              Thread_id,
              input.current.value,
              messages,
              setChatMessages,
              setIsChatbotTyping
            );



            input.current.value = "";
          }
        }}
        className="flex justify-center items-center w-[20%] h-full"
      >
        <SendIcon color={theme === "light" && "white"} />
      </button>
    </div>
  );
};
