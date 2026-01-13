export default function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const message = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim()
    };

    if (!message.name || !message.email || !message.subject || !message.message) {
      alert("Please fill in all fields!");
      return;
    }

    onAdd(message);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Contact Form</legend>

        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name" placeholder="Your Name" /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" placeholder="Your Email" /><br /><br />

        <label htmlFor="subject">Subject:</label><br />
        <input type="text" id="subject" name="subject" placeholder="Message Subject" /><br /><br />

        <label htmlFor="message">Message:</label><br />
        <textarea id="message" name="message" rows="5" cols="40" placeholder="Write your message here..."></textarea><br /><br />

        <div className="btn-container">
          <input type="submit" value="Send Message" />
          <input type="reset" value="Clear Form" />
        </div>
      </fieldset>
    </form>
  );
}
