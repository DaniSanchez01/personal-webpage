import ContactForm from '../contactForm';

const ContactSection = () => {
  return (
    <div className="row">
      <div className="col-auto col-md-4 order-md-last">
        <h1>Let's talk!</h1>
        <p>
          Whether it's a quick hello, a question, or a potential collaboration,
          I'd love to hear from you.
        </p>
        <p>
          I'm always open to connecting with curious minds and exploring new
          opportunities together.
        </p>
      </div>
      <div className="col-auto col-md-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
