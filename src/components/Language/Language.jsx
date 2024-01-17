import React from "react";
import { useTranslation } from "react-i18next";
import { switchLang } from "../../assets/helpers/lang";
import "./Language.css";

export default function Language() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    switchLang(lng);
  };

  return (
    <>
      {t("lang") === "ar" ? (
        <button className="nav-link language" onClick={() => changeLanguage("en")}>En</button>
      ) : (
        <button className="nav-link language" onClick={() => changeLanguage("ar")}>Ar</button>
      )}
    </>
  );
}
