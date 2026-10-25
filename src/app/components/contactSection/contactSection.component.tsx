import ContactForm from '../contactForm';

const ContactSection = () => {
  return (
    <div className="cst-contact-section">
      <div>
        <h2 className="contact-title">
          Let's <em className="cst-accent-word">talk!</em>
        </h2>
        <p className="contact-lead">
          Whether it's a quick hello, a question, or a potential collaboration,
          I'd love to hear from you.
        </p>
        <p className="contact-note">
          I'm always open to connecting with curious minds and exploring new
          opportunities together.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactSection;
