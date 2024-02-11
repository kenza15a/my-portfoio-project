import React from 'react'
import "./ContactForm.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import   {useRef}  from 'react';
import emailjs from 'emailjs-com';
import * as Yup from 'yup';
function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
          publicKey: 'YOUR_PUBLIC_KEY',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
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
    onSubmit={(values, { resetForm, setSubmitting }) => {
        // Call sendEmail function here
        sendEmail(values);
        // Reset form after successful submission
        resetForm();
        // Set submitting to false to enable the button
        setSubmitting(false);
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

    </>
  )
}

export default ContactForm
