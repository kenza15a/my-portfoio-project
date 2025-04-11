import React from "react";
import "./Contact.css";
import ContactCard from "./ContactCard";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import ContactForm from "../ContactForm/ContactForm";

function Contact() {
  return (
    <>
      <section id="contact" name="contact">
        <h5>Un petit échange pro !</h5>
        <h2>Contactez moi</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <ContactCard
              contactOption={<CiMail />}
              contactInfo="kenza.filali.rahal@gmail.com"
              contactUrl="mailto:kenza.filali.rahal@gmail.com"
              contactText="envoyez-moi un mail"
            />
            <ContactCard
              contactOption={<CiLinkedin />}
              contactInfo="On se connecte sur Linkedin?"
              contactUrl="https://www.linkedin.com/in/kenza-fil/"
              contactText="envoyez-moi un message"
            />
          </div>
          <div className="contact__form">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
