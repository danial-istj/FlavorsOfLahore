import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import MessageList from "../components/MessageList";

export default function ContactPage() {


  const [messages, setMessages] = useState(() => {
    const stored = JSON.parse(localStorage.getItem("messages"));
    return stored ? stored : []
  });
  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const deleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  return (
    <main className="content">
      <div>
        <h1>Contact Us</h1>
        <h2>We’d Love to Hear From You!</h2>
        <h3>Reach Out Anytime</h3>

        <p>
          At <b>Flavors of Lahore</b>, we’re always happy to connect with our
          customers. Whether it’s about your recent dining experience, a
          catering inquiry, or just to say hello, feel free to contact us
          through the form below or visit us at our restaurant.
        </p>

        <p>
          Our <i>support team</i> is available 7 days a week to respond to your
          questions and feedback.
        </p>

        <p>
          You can also <u>call us directly</u> or send us a message through our
          social media pages listed below.
        </p>

        <hr />

        <h2>Our Contact Details</h2>
        <ul>
          <li>
            <b>Address:</b> 123 Food Street, Gulberg III, Lahore, Pakistan
          </li>
          <li><b>Phone:</b> +92 300 1234567</li>
          <li><b>Email:</b> info@flavorsoflahore.com</li>
        </ul>

        <hr />

        <h2>Opening Hours</h2>
        <table border="1" cellPadding="8" className="styled-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Opening Time</th>
              <th>Closing Time</th>
            </tr>
          </thead>
          <tbody>
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
          </tbody>
        </table>

        <h2>Send Us a Message</h2>
        <ContactForm onAdd={addMessage} />

        <MessageList messages={messages} onDelete={deleteMessage} />

        <h2>Find Us on Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.8099113766375!2d74.2682316!3d31.446899699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919017432b1835b%3A0xe396992a5b05891c!2sUniversity%20of%20Central%20Punjab!5e0!3m2!1sen!2s!4v1761134136648!5m2!1sen!2s"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <br /><br />
      </div>
    </main>
  );
}
