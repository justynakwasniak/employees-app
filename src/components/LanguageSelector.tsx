import React from "react";
import i18next from "i18next";

export function LanguageSelector() {
  const onLanguageClick = (lng: string) => {
    i18next.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => onLanguageClick("en")}>English</button>
      <button onClick={() => onLanguageClick("pl")}>Polski</button>
    </div>
  );
}
