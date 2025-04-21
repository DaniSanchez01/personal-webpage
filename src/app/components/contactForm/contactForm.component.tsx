import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    show: boolean;
    isError: boolean;
    message: string;
  }>({
    show: false,
    isError: false,
    message: '',
  });

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
        form.current,
        'YOUR_PUBLIC_KEY', // Reemplaza con tu Public Key
      )
      .then(
        () => {
          setFormStatus({
            show: true,
            isError: false,
            message: '¡Mensaje enviado correctamente!',
          });
          if (form.current) form.current.reset();
        },
        (error) => {
          setFormStatus({
            show: true,
            isError: true,
            message: `Error al enviar el mensaje: ${error.text}`,
          });
        },
      )
      .finally(() => {
        setIsSubmitting(false);

        setTimeout(() => {
          setFormStatus((prev) => ({ ...prev, show: false }));
        }, 5000);
      });
  };

  return (
    <div className="cst-form">
      {formStatus.show && (
        <div
          className={`alert ${formStatus.isError ? 'alert-danger' : 'alert-success'} mb-3`}
        >
          {formStatus.message}
        </div>
      )}

      <form ref={form} onSubmit={sendEmail} className="row">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="user_name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="user_name"
              name="user_name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="user_email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="user_email"
              name="user_email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              placeholder="Subject of the message"
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="cst-submit-btn cst-read-more-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
