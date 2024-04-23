import React, { useState } from "react";
import "./Contact.scss";
import {
  FaEnvelopeOpen,
  FaGithub,
  FaLinkedin,
  FaPhoneSquareAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEle = document.querySelector(".contact__form");
    const formData = new FormData(formEle);
    const formSheets = process.env.REACT_APP_API_SHEETS;

    try {
      await fetch(formSheets, {
        method: "POST",
        body: formData,
      });

      toast.success("Your message has been sent!");
      setFormData({
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In<span>Touch</span>
      </h2>

      <div className="contact__conatainer container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Please don't hesitate to contact me.
          </h3>

          <p className="contact__description">
            I welcome discussions about new projects, creative ideas, or
            opportunities to contribute to your vision.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">juwiz999@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+234 907 352 0712</h4>
              </div>
            </div>
          </div>
          <div className="contact__socails">
            <Link
              target="_blank"
              to="https://github.com/Omaaj?tab=repositories"
              className="contact__social-link"
            >
              <FaGithub />
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/atunwon-olajuwon/"
              className="contact__social-link"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
        <form className="contact__form" onSubmit={(e) => handleSubmit(e)}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Name"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                className="form__control"
                placeholder="Your Email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                className="form__control"
                placeholder="Your Subject"
                name="Subject"
                value={formData.Subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="button">
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
