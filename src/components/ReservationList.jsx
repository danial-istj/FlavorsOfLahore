import ReservationItem from "./ReservationItem";

export default function ReservationList({ reservations, onDelete }) {
  return (
    <div id="reservations-section">
      <h2>Your Reservations</h2>
      <ul className="reservations-list">
        {reservations.map((res, index) => (
          <ReservationItem
            key={index}
            reservation={res}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
}
