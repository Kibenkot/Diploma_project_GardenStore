import React from "react";
import s from "./Button.module.css";

function Button({ title, style_btn, onCLickFunc }) {
  return (
    <div>
      <button onClick={onCLickFunc} className={`${s.btn} ${s[style_btn]}`}>
        {title}
      </button>
    </div>
  );
}

export default Button;
