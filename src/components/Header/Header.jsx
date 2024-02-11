import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svgs/dark-logo.svg";
import { ReactComponent as Menu } from "../../assets/svgs/menu.svg";
import { useTranslation } from "react-i18next";
import { switchLang } from "../../assets/helpers/lang.js";
import cloudImg from "../../assets/images/cloud.png";
import partnerImg from "../../assets/images/partners.png";
import "./Header.css";

export default function Header() {
  const [menuToggle, setMenuToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    switchLang(lng);
  };
  return (
    <>
      <div className="header small-header" data-aos="fade-down">
        <div className="container">
          <ul>
            <li>
              <a rel="noreferrer" href="mailto:omarahmed8k@gmail.com" target="_blank" ><i className="fa-solid fa-envelope"></i> omar@gmail.com</a>
              <a rel="noreferrer" href="tel:+20123456789" target="_blank"><i className="fa-solid fa-phone"></i> +20123456789</a>
            </li>
            <li>
              <a rel="noreferrer" target="_blank" href="https://www.facebook.com"><i className="fa-brands fa-facebook-f"></i></a>
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com"><i className="fa-brands fa-linkedin-in"></i></a>
              <a rel="noreferrer" target="_blank" href="https://www.x.com"><i className="fa-brands fa-x-twitter"></i></a>
            </li>
          </ul>
        </div>
      </div >
      <div className="header" data-aos="fade-down">
        <div className="container">
          <ul>
            <li>
              <Link className="logo" to={`/`}>
                <Logo />
              </Link>
            </li>
            {/* <li>
              <ul className={`nav-links ${menuToggle && "show"}`}>
                <li onClick={() => { setMenuToggle(!menuToggle) }}>
                  <Link to={`/`}>{t("header.home")}</Link>
                </li>
                <li onClick={() => { setMenuToggle(!menuToggle) }}>
                  <NavLink to={`/about`}>{t("header.about")}</NavLink>
                </li>
                <li className="has-menu" onClick={() => { setMenuToggle(!menuToggle) }}>
                  <NavLink to={`/services-and-solutions`}>
                    {t("header.technologySolutions")}
                  </NavLink>
                  <div className="menu">
                    <ul className="container">
                      <li>
                        <h4>
                          <NavLink to={`/services`}>
                            {t("header.services")}
                          </NavLink>
                        </h4>
                        <NavLink to={`/services/it-support-system`}>
                          {t("header.itSupportSystem")}
                        </NavLink>
                        <NavLink to={`/services/professional-services`}>
                          {t("header.professionalServices")}
                        </NavLink>
                        <NavLink to={`/services/integration`}>
                          {t("header.integration")}
                        </NavLink>
                        <NavLink to={`/services/networking-security`}>
                          {t("header.networkingSecurity")}
                        </NavLink>
                      </li>
                      <li>
                        <h4>
                          <NavLink to={`/solutions`}>
                            {t("header.solutions")}
                          </NavLink>
                        </h4>
                        <NavLink to={`/solutions/core-infrastructure`}>
                          {t("header.infrastructure")}
                        </NavLink>
                        <NavLink to={`/solutions/systems`}>
                          {t("header.systems")}
                        </NavLink>
                        <NavLink to={`/solutions/cloud-computing`}>
                          {t("header.cloudComputing")}
                        </NavLink>
                        <NavLink to={`/solutions/data-center`}>
                          {t("header.dataCenter")}
                        </NavLink>
                      </li>
                      <li>
                        <img src={cloudImg} alt="cloudImg" />
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-menu" onClick={() => { setMenuToggle(!menuToggle) }}>
                  <NavLink to={`/partners`}>{t("header.partners")}</NavLink>
                  <div className="menu">
                    <ul className="container">
                      <li>
                        <h4>
                          <NavLink to={`/partners`}>
                            {t("header.partners")}
                          </NavLink>
                        </h4>
                        <NavLink to={`/partners/it-service-management`}>
                          {t("header.itServiceManagement")}
                        </NavLink>
                        <NavLink to={`/partners/cloud-infrastructure`}>
                          {t("header.cloudInfrastructure")}
                        </NavLink>
                        <NavLink to={`/partners/it-security`}>
                          {t("header.iTSecurity")}
                        </NavLink>
                        <NavLink to={`/partners/business-application`}>
                          {t("header.businessApplication")}
                        </NavLink>
                      </li>
                      <li>
                        <h4>
                          <br />
                        </h4>
                        <NavLink to={`/partners/backup-recovery`}>
                          {t("header.backupRecovery")}
                        </NavLink>
                        <NavLink to={`/partners/volume-licensing`}>
                          {t("header.volumeLicensing")}
                        </NavLink>
                        <NavLink to={`/partners/communication-collaboration`}>
                          {t("header.communicationCollaboration")}
                        </NavLink>
                      </li>
                      <li>
                        <img src={partnerImg} alt="partnerImg" />
                      </li>
                    </ul>
                  </div>
                </li>
                <li onClick={() => { setMenuToggle(!menuToggle) }}>
                  <NavLink to={`/contact`}>{t("header.contact")}</NavLink>
                </li>
              </ul>
            </li> */}
            <li>
              <button className="menu-btn" onClick={() => { setMenuToggle(!menuToggle) }}>
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <Link to={`/contact`} className="main-btn">
                {t("header.requestAQuote")}
              </Link> */}
              {t("lang") === "ar" ? (
                <button className="lang-btn" onClick={() => changeLanguage("en")}> EN <i className="fa-solid fa-globe"></i> </button>
              ) : (
                <button className="lang-btn" onClick={() => changeLanguage("ar")}> <i className="fa-solid fa-globe"></i> AR </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
