import React from "react";
import s from "./Footer.module.css";
import InteractiveMap from "../InteractiveMap/InteractiveMap";
import { ImWhatsapp } from "react-icons/im";
import { SlSocialInstagram } from "react-icons/sl";

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
                <SlSocialInstagram className={s.icon_inst} />
                <p>instagram</p>
              </a>
            </div>
            <div className={s.icon}>
              <a href="https://www.whatsapp.com">
                <ImWhatsapp className={s.icon_whats} />
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
