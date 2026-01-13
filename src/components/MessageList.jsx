import MessageItem from "./MessageItem";

export default function MessageList({ messages, onDelete }) {
  return (
    <div id="messages-section" className="messages-section">
      <h2>Your Messages</h2>
      <ul className="messages-list">
        {messages.map((msg, index) => (
          <MessageItem
            key={index}
            message={msg}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
}
