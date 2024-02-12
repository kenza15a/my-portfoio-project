import React, { useState } from 'react'
import "./ContactForm.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com'
import ModalComponent from '../ModalComponent/ModalComponent';

function ContactForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const handleRedirect = () => {
        closeModal();
      
      };

    function SendEmail(object) {
        emailjs.send("service_s3kwon5", "template_1eoy6fc", object,"HVk_U1r0LulXtJzgf" )
            .then((result) => {
                console.log(result.text)
               
            }, (error) => {
                console.log(error.text)
            })
    }
  
    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Le nom est requis'),
        email: Yup.string().email('Email invalide').required('L\'email est requis'),
        message: Yup.string().required('Le message est requis'),
      });
  return (
    <>
     <Formik
    initialValues={{ name: '', email: '', message: '' }}
    
    validationSchema={validationSchema}
    onSubmit={(values, actions) => {
        setTimeout(() => {
          SendEmail(values)
          console.log("submit", values);
          openModal();
          actions.setSubmitting(false);
          actions.resetForm();
        }, 400)
      }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div className='form__group'>
         
          <Field type="text" id="name" name="name" placeholder="Nom complet" />
          <ErrorMessage className="error__message" name="name" component="div" />
        </div>
        <div className='form__group'>
          
          <Field type="email" id="email" name="email"placeholder="nom@website.com" />
          <ErrorMessage className="error__message" name="email" component="div"  />
        </div>
        <div className='form__group'>
          
          <Field as="textarea" id="message" name="message" rows="7" placeholder="Votre message"/>
          <ErrorMessage className="error__message" name="message" component="div" />
        </div>
        
        <button className='btn btn_primary' type="submit" disabled={isSubmitting}>Envoyer</button>
      </Form>
    )}
  </Formik>
  {isModalOpen && (
            <ModalComponent
              isOpen={isModalOpen}
              contentComponent={
               <h1 className='modal__text'>Merci pour votre message, Je vous contacterai très prochainement 😀!  </h1>
              }
              closeFunction={closeModal}
              okButtonState={true}
              buttonFunction={handleRedirect}
              buttonText={"A bientot !"}
            />
          )}
    </>
  )
}

export default ContactForm
