import { useRef } from "react";
import emailjs from "emailjs-com";
import contactImg from "../assets/contact.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail_jameela",
        "template_z86p8sc",
        form.current,
        "YUjk2lV-2awVlIl5F"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    
  <section className="contact-section" id="contact">
  <h2 className="contact-title">Contact Me</h2>
     <div className="contact-wrapper">
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="from_name" placeholder="Your Name" required />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
        />
        <textarea name="message" placeholder="Your Message" required />
        <button  type="submit">Send Message</button>
         <div className="social-icons">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
      </form>
        </div>

        <div className="contact-image">
          <img src={contactImg} alt="Contact illustration" />
        </div>
        
</div>
     
    </section>
  );
}

export default Contact;
