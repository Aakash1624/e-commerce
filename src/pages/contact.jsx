import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import faqsData from '../constants/faqs';

const Contact = () => {
  const [show, setShow] = useState({}); // Use an object to store show state for each FAQ

  const toggleShow = (id) => {
    setShow({ ...show, [id]: !show[id] }); // Toggle show state for the clicked FAQ
  };

  return (
    <div className="contact-page">
      <span className="contact-title">
        <b>Manage Your Orders Easily</b>
      </span>
      <span className="contact-title">
        Track, Return/ Exchange or Cancel your orders hassle-free.
      </span>
      <br />
      <Link to="/myOrder" className="link">
        <button className="order">my order</button>
      </Link>
      <div className="contact-content">
        <h1>
          <b>What can we help with you today?</b>
        </h1>
        <br />
      </div>
      <h2 className="faq-title">FAQs</h2>
      <hr />
      <div className="faq-body-content">
        {faqsData.map((itemFaq, id) => {
          return (
            <div
              className={`faq-item ${show[id] ? 'active' : ''}`}
              key={id}
              onClick={() => toggleShow(id)}
            >
              <div className="faq-question">
                {itemFaq.question} <IoIosArrowDown className="up-arrow" />
              </div>
              <div className="faq-answer-body">
                <div className="faq-answer">{itemFaq.answer}</div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="stay-touch">
        <h1 className="contact-footer-title">Stay in touch</h1>
        <div className="social-contact">
          <a href="https://wa.me/6383017428" target="_blank">
            <img
              className="social-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/640px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png"
              alt=""
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              className="social-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
              alt=""
            />
          </a>
          <a href="https://twitter.com/intent/tweet" target="_blank">
            <img
              className="social-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/640px-X_icon_2.svg.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
