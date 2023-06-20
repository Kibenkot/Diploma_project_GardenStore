import React from "react";
import s from "./Footer.module.css";
import InteractiveMap from "../InteractiveMap/InteractiveMap";
import whatsapp from "./media/whatsapp.svg"
import instagram from "./media/instagram.svg"

function Footer() {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_contact_address}>
        <div className={s.contact}>
          <h2>Contact</h2>
          <p className={s.phone}>+49 999 999 99 99</p>
          <div className={s.wrapper_icon}>
            <div className={s.icon}>
              <a href="https://www.instagram.com">
                <img className={s.icons} src={instagram} alt="instagram" />
                <p>instagram</p>
              </a>
            </div>
            <div className={s.icon}>
              <a href="https://www.whatsapp.com">
                <img className={s.icons} src={whatsapp} alt="whatsapp" />
                <p>WhatsApp</p>
              </a>
            </div>
          </div>
        </div>
        <div className={s.address}>
          <h2>Address</h2>
          <a href="https://tel-ran.de ">
            Linkstraße 2, 8 OG, 10785, <br />
            Berlin, Deutschland
          </a>
          <p className={s.address_hours}>Working Hours:</p>
          <p className={s.address_long_hours}>24 hours a day</p>
        </div>
      </div>
      <div className={s.wrapper_map}>
        <InteractiveMap />
      </div>
    </div>
  );
}

export default Footer;
