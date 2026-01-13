export default function MessageItem({ message, onDelete }) {
  return (
    <li style={{ position: "relative" }}>
      <span
        onClick={onDelete}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        ✖
      </span>

      <b>Name:</b> {message.name}<br />
      <b>Email:</b> {message.email}<br />
      <b>Subject:</b> {message.subject}<br />
      <b>Message:</b> {message.message}
    </li>
  );
}
