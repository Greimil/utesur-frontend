import CloseWindowsIcon from "../icons/CloseWindowsIcon";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { useRef, useState } from "react";
import ChatIcon from "../icons/ChatIcon";

export const ChatWindow = ({
  messages,
  setChatMessages,
  isChatbotTyping,
  onSend,
  theme,
  Thread_id,
  setIsChatbotTyping
}) => {
  const chatWindowsRef = useRef(null);
  const [showChat, setShowChat] = useState(false); // Corregido: se cambió la asignación de setShowChat

  return (
    <>
      {showChat ? (
        <div
          ref={chatWindowsRef}
          className="fixed  h-[460px] w-[400px] overflow-hidden right-8 bottom-10 bg-[#000000] dark:bg-[#333333] border rounded"
        >
          <div className="flex justify-end p-2">
            <button
              onClick={() => {
                setShowChat(false);
              }} // Corregido: eliminado el console.log y la redundancia en la asignación
            >
              <CloseWindowsIcon
                color={theme === "light" ? "white" : undefined}
              />{" "}
              {/* Corregido: añadido operador ternario para el color */}
            </button>
          </div>
          <div className="rounded bg-[#ffffff] relative h-full">
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
                setChatMessages={setChatMessages}
                messages={messages}
                Thread_id={Thread_id}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className="fixed   right-8 bottom-28 flex justify-center items-center rounded-full h-12 w-24 border cursor-pointer gap-2"
          onClick={() => {
            setShowChat(true);
          }}
        >
          <ChatIcon /> <strong>Chat</strong>{" "}
        </div>
      )}
    </>
  );
};
