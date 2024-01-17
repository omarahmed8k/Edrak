import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { Fade } from "react-reveal";
import "./Footer.css";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Fade bottom>
      <div className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-item">
              <Logo />
              <h3>{t("footer.title1")}</h3>
              <p>{t("footer.desc1")}</p>
            </div>
            <div className="footer-item">
              <h3>{t("footer.title2")}</h3>
              <Link to={"/services/it-support-system"} className="footer-link">
                {t("footer.solutionLink1")}
              </Link>
              <Link to={"/services/professional-services"} className="footer-link">
                {t("footer.solutionLink2")}
              </Link>
              <Link to={"/services/integration"} className="footer-link">
                {t("footer.solutionLink3")}
              </Link>
              <Link to={"/services/networking-security"} className="footer-link">
                {t("footer.solutionLink4")}
              </Link>
            </div>
            <div className="footer-item">
              <h3>{t("footer.title3")}</h3>
              <Link to={"/solutions/core-infrastructure"} className="footer-link">
                {t("footer.servicesLink1")}
              </Link>
              <Link to={"/solutions/systems"} className="footer-link">
                {t("footer.servicesLink2")}
              </Link>
              <Link to={"/solutions/cloud-computing"} className="footer-link">
                {t("footer.servicesLink3")}
              </Link>
              <Link to={"/solutions/data-center"} className="footer-link">
                {t("footer.servicesLink4")}
              </Link>
            </div>
            <div className="footer-item">
              <h3>{t("footer.title4")}</h3>
              <p>{t("footer.phone")}</p>
              <p>{t("footer.email")}</p>
              <p>{t("footer.location")}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
