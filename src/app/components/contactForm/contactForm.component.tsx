import { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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
        EMAILJS_SERVICE_ID as string,
        EMAILJS_TEMPLATE_ID as string,
        form.current,
        EMAILJS_PUBLIC_KEY as string,
      )
      .then(
        () => {
          setFormStatus({
            show: true,
            isError: false,
            message: 'Message sent successfully!',
          });
          if (form.current) form.current.reset();
        },
        (error) => {
          setFormStatus({
            show: true,
            isError: true,
            message: `Error sending message: ${error.text}`,
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
          <div className="col-md-6 mb-4">
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
          <div className="col-md-6 mb-4">
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
          <div className="col-12 mb-4">
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
          <div className="col-12 mb-4">
            <label htmlFor="message" className="form-label">
              Message
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
