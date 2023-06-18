import React from "react";
import s from "./Form.module.css";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cleanBasketAction } from "../../../store/reducers/basketReducer";

function Form({
  title,
  style_form_btn,
  style_form_input,
  placeholder,
  fetchPostRequest,
}) {
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onSubmit" });

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const basket = useSelector((store) => store.basket);

  const onSubmit = (data) => {
    if (pathname === "/basket") {
      fetchPostRequest([data, ...basket]);
      dispatch(cleanBasketAction());
    } else {
      fetchPostRequest(data);
    }
    reset();
  };

  const phoneInp = register("phone", {
    required: "Please enter a valid telephone number +49xxxxxxxxx",
    pattern: {
      value: /^\+49\d{9}$/,
      message: "Please enter a valid telephone number +49xxxxxxxxx",
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.container_form}>
          <label>
            <input
              className={`${s.num_phone} ${s[style_form_input]}`}
              placeholder={placeholder}
              {...phoneInp}
            />
          </label>
        </div>
        {errors.phone && (
          <p className={s.comment_error}>{errors.phone.message}</p>
        )}
        <div className={s.container_btn}>
          <button className={`${s.form_btn} ${s[style_form_btn]}`}>
            {title}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
