import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Container, Button, Alert } from 'reactstrap';

const ContactPage = () => {
    const [alert, setAlert] = useState({
        show: false,
        error: false,
        message: '',
    });

    const hideAlert = () => {
        setAlert({
            ...alert,
            show: false
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_1v75opr', 'devkhon_template', e.target, 'user_sR2tD7nlbtxcJn5upfJM1')
      .then((result) => {
          setAlert({
              show: true,
              error: false,
              message: 'Thank you. Your message has been sent!'
          })
          console.log(result.text);
      }, (error) => {
        setAlert({
            show: true,
            error: false,
            message: 'Error occurred.'
        })
          console.log(error.text);
      });
  }

  return (
      <div>
          <Container>
              <div className="contactPage-msg">
                  <h2>Contact Me!</h2>
                  <p>Thank you for stopping by and checking
                      out my personal portfolio! I hope you 
                      enjoyed the content that was availble.
                      Please I would love your criticism and 
                      insights! Even if its just a simple hello
                      or you would like to connect with me. I love
                      meeting new people so feel free to send me an
                      email using the form below! Thank you again!
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
                  <Button 
                  className="sub-btn" 
                  type="submit" 
                  style={
                      { backgroundColor: `rgb(${157}, ${45}, ${231})`, 
                        borderRadius: 20 }
                      }>Submit!</Button>
                  </div>
                  </div>
              </form>
              <Alert color={alert.error ? 'danger' : 'success'} isOpen={alert.show} toggle={hideAlert}>
                {alert.message}
            </Alert>
          </Container>
      </div>
  )
}

export default ContactPage;