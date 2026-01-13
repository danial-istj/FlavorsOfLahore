export default function ReservationForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const reservation = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      guests: parseInt(form.guests.value, 10),
      date: form.date.value,
      time: form.time.value,
      occasion: form.occasion.value,
      comments: form.comments.value.trim() || "No comments",
    };

    // --- Specific Validations ---
    if (!reservation.name) {
      alert("Please enter your full name.");
      return;
    }
    if (!reservation.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    if (reservation.phone.length < 10) {
      alert("Please enter a valid phone number (at least 10 digits).");
      return;
    }
    if (
      isNaN(reservation.guests) ||
      reservation.guests < 1 ||
      reservation.guests > 10
    ) {
      alert("Reservations must be for 1 to 10 guests.");
      return;
    }
    if (!reservation.date) {
      alert("Please select a date for your reservation.");
      return;
    }
    if (!reservation.time) {
      alert("Please select a time for your reservation.");
      return;
    }

    onAdd(reservation);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>
          <b>Reservation Form</b>
        </legend>

        <label htmlFor="name">Full Name:</label>
        <br />
        <input type="text" id="name" name="name" />
        <br />
        <br />

        <label htmlFor="email">Email Address:</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />
        <br />

        <label htmlFor="phone">Phone Number:</label>
        <br />
        <input type="tel" id="phone" name="phone" />
        <br />
        <br />

        <label htmlFor="guests">Number of Guests (1-10):</label>
        <br />
        <input
          type="number"
          id="guests"
          name="guests"
          defaultValue="1"
          required
        />
        <br />
        <br />

        <label htmlFor="date">Reservation Date:</label>
        <br />
        <input type="date" id="date" name="date" />
        <br />
        <br />

        <label htmlFor="time">Reservation Time:</label>
        <br />
        <input type="time" id="time" name="time" />
        <br />
        <br />

        <label htmlFor="occasion">Occasion:</label>
        <br />
        <select id="occasion" name="occasion">
          <option>Casual Dinner</option>
          <option>Birthday Party</option>
          <option>Family Gathering</option>
          <option>Corporate Meeting</option>
        </select>
        <br />
        <br />

        <label htmlFor="comments">Additional Comments:</label>
        <br />
        <textarea id="comments" name="comments" rows="4" cols="40"></textarea>
        <br />
        <br />

        <div class="btn-container">
          <input type="submit" value="Submit Reservation" />
          <input type="reset" value="Clear Form" />
        </div>
      </fieldset>
    </form>
  );
}
