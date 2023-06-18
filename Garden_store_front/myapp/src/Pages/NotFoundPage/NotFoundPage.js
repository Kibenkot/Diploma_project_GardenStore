import React, { useEffect } from "react";
import s from "./NotFoundPage.module.css";
import notFound_404 from "./media/notFound_404.png";

function NotFoundPage() {

  useEffect(() =>{
    document.title= 'notFound_404'
  }, [])


  return (
    <div className={s.wrapper}>
      <img src={notFound_404} alt="notFound_404" />
    </div>
  );
}

export default NotFoundPage;
