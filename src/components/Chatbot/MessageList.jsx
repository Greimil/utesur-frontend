import { Message } from "./Message";
import { TypingIndicator } from "./TypingIndicator";
TypingIndicator

export const MessageList = ({ messages, isChatbotTyping, theme }) => (
    <div className="p-2 messageList overflow-y-auto scrollable-content   max-h-[380px] ">
      {messages.map((message, i) => (
        <Message key={i} date={message.created_at} message={message.content[0].text.value} role={message.role} theme={theme} />
      ))}
      {isChatbotTyping && (
        <TypingIndicator content="ByteBuddy is thinking..." />
      )}
    </div>
  );