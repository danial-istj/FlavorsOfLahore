export default function ReservationItem({ reservation, onDelete }) {
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

      <b>Name:</b> {reservation.name}<br />
      <b>Email:</b> {reservation.email}<br />
      <b>Phone:</b> {reservation.phone}<br />
      <b>Guests:</b> {reservation.guests}<br />
      <b>Date:</b> {reservation.date}<br />
      <b>Time:</b> {reservation.time}<br />
      <b>Occasion:</b> {reservation.occasion}<br />
      <b>Comments:</b> {reservation.comments}
    </li>
  );
}
