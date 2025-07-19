import ContactForm from '../contactForm';

const ContactSection = () => {
  return (
    <div className="row align-items-start">
      <div className="col-auto col-md-4 order-md-last mb-4">
        <div className="contact-intro">
          <h2 className="fw-bold mb-3">
            Let's <span style={{ color: 'var(--cst-palette2-7)' }}>talk!</span>
          </h2>
          <p className="fw-medium mb-3">
            Whether it's a quick hello, a question, or a potential
            collaboration, I'd love to hear from you.
          </p>
          <p className="text-muted">
            I'm always open to connecting with curious minds and exploring new
            opportunities together.
          </p>
        </div>
      </div>
      <div className="col-auto col-md-8">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
