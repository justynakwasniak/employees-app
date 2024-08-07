import React from "react";
import i18next from "i18next";

export function LanguageSelector() {
  const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18next.changeLanguage(event.target.value);
  };

  return (
    <div className="mb-3 ">
      <select
        className="form-select"
        onChange={onLanguageChange}
        defaultValue={i18next.language}
      >
        <option value="en">English</option>
        <option value="pl">Polski</option>
      </select>
    </div>
  );
}
