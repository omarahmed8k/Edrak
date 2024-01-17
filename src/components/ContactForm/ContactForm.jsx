import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";
import "./ContactForm.css";

export default function ContactForm() {
  const { t } = useTranslation();
  return (
    <Fade bottom>
      <div className="contact-form">
        <div className="container content">
          <h2 className="title">{t("contact.title")}</h2>
          <p className="desc">{t("contact.desc")}</p>
          <form>
            <div className="form-input w-50">
              <input type="text" placeholder=" " required />
              <label>{t("contact.name")}</label>
            </div>
            <div className="form-input w-50">
              <input type="number" placeholder=" " required />
              <label>{t("contact.phone")}</label>
            </div>
            <div className="form-input w-100">
              <input type="text" placeholder=" " required />
              <label>{t("contact.email")}</label>
            </div>
            <div className="form-input w-100">
              <textarea placeholder=" " required></textarea>
              <label>{t("contact.message")}</label>
            </div>
            <div className="form-input w-100">
              <button className="second-btn" type="submit">
                {t("contact.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fade>
  );
}
