import { useEffect, useState } from "react";
import ReservationForm from "../components/ReservationForm";
import ReservationList from "../components/ReservationList";

export default function Reservation() {


  const [reservations, setReservations] = useState(() => {
    const saved = localStorage.getItem("reservations");
    return saved ? JSON.parse(saved): [];
  });

  useEffect(() => {
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }, [reservations]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const deleteReservation = (index) => {
    setReservations(reservations.filter((_, i) => i !== index));
  };

  return (
    <main className="content">
      <div>
        <h1>Table Reservation & Registration</h1>
        <h2>Reserve Your Table in Advance</h2>
        <h3>We’d Love to Serve You!</h3>

        <p>
          Welcome to our online reservation system. Use this form to
          <b>book your table</b> and enjoy a <i>fine dining experience</i> with
          your family and friends at <u>Flavors of Lahore</u>.
        </p>

        <p>
          After completing your registration, our representative will contact
          you to confirm your booking.
        </p>

        <ReservationForm onAdd={addReservation} />

        <ReservationList
          reservations={reservations}
          onDelete={deleteReservation}
        />

        <h2>Our Timings</h2>
        <p>Here are our <b>restaurant hours</b> for your convenience:</p>
        <table border="1" cellpadding="8" class="styled-table">
          <tr>
            <th>Day</th>
            <th>Opening Time</th>
            <th>Closing Time</th>
          </tr>
          <tr>
            <td>Monday - Friday</td>
            <td>12:00 PM</td>
            <td>11:00 PM</td>
          </tr>
          <tr>
            <td>Saturday - Sunday</td>
            <td>1:00 PM</td>
            <td>12:00 AM</td>
          </tr>
        </table>

        <h2>Why Register Online?</h2>
        <ul>
          <li>Fast and easy booking process</li>
          <li>Guaranteed table availability</li>
          <li>Exclusive discounts for online reservations</li>
        </ul>

        <h2>Steps to Reserve a Table</h2>
        <ol>
          <li>Fill out the reservation form above</li>
          <li>Wait for a confirmation message</li>
          <li>Arrive on time and enjoy your meal!</li>
        </ol>
      </div>
    </main>
  );
}
