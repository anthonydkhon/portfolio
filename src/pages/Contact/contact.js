import React from 'react';
import emailjs from 'emailjs-com';
import { Container, Button } from 'reactstrap';

const ContactMe = () => {
    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_1v75opr', 'devkhon_template', e.target, 'user_sR2tD7nlbtxcJn5upfJM1')
      .then((result) => {
          window.location.reload();
          alert("Your message has been recieved!")
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
      <div>
          <Container>
              <div className="contact-msg">
                  <h2>Contact Me!</h2>
                  <p>Thank you for stopping by and checking
                      out my personal portfolio! I would love to
                      connect with you and hear your insights. You
                      can use the form down below to send me a
                      message and I will gladly respond back to you
                      as soon as possible.
                  </p>
              </div>
              <form onSubmit={sendEmail}>
                  <div>
                  <div className="input-field">
                      <input type="text" placeholder="Name"
                      name="name" required />
                  </div>
                  <div className="input-field">
                      <input type="email" placeholder="Email"
                      name="email" required />
                  </div>
                  <div className="input-field">
                      <input type="text" placeholder="Subject"
                      name="subject" />
                  </div>
                  <div className="input-field">
                      <textarea placeholder="Your Message..."
                      name="message" />
                  </div>
                  <div>
                  <Button className="sub-btn" type="submit" 
                  color="secondary">Submit!</Button>
                  </div>
                  </div>
              </form>
          </Container>
      </div>
  )
}

export default ContactMe;


