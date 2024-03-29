import React from 'react'
import "./About.css"
import Me from'../../assets/kenza section about.jpg';
import Card from '../Card/Card';
import { PiCodeSimpleLight } from "react-icons/pi";

import { TbFileTypeHtml } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

function About() {
  return (
  <>
  <section id="about">
    <h5>Je me présente </h5>
    <h2>A propos de moi</h2>
   <div className='container about__container'>
    <div className="about__me">
     <img src={Me} alt=" kenza's presentation"/>
    </div>
    <div className="about__content">
      <div className="about__cards">
        <Card icon={<TbFileTypeHtml/>} title="Integrateur WEB" subTitle="Depuis avr 2016"/>
        <Card icon={<FaWordpress/>} title="Webmaster /développeur" subTitle="Depuis jan 2018"/>
        <Card icon={<FaReact />} title="Développeuse Frontend" subTitle="Depuis jan 2021"/>
      </div>
      <p className="about__text"> 
      Développeuse Frontend Avec une solide expérience de 6 ans en tant que 
      webmaster intégrateur web, j'ai acquis une expertise polyvalente en 
      utilisant des technologies web telles que HTML, CSS, JavaScript et WordPress, tant au sein d'entreprises que dans des projets en freelance. Mon parcours a pris une nouvelle dimension lors d'une formation 
      professionnelle, où j'ai intensivement travaillé avec React.js pendant 2
      ans pour faire évoluer mes compétences techniques afin qu'elles soient en adéquation avec le marché du web </p>
   <a href="#contact" className='btn btn-primary'>Parlons-en</a>
    </div>
     </div>
    </section></>
  )
}

export default About
