export function handleTitle(lang) {
    return lang === "ar" ? "شركة إدراك العالمية" : "Edrak International Company";
}

export function checkFixLang(lang = "en") {
    lang === "ar" ? switchLang("ar") : switchLang("en");
    return lang;
}

export function switchLang(lang) {
    document.getElementsByTagName("html")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.getElementsByTagName("body")[0].setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);

    const title = document.getElementsByTagName("title")[0];
    title.innerHTML = handleTitle(lang);
}
