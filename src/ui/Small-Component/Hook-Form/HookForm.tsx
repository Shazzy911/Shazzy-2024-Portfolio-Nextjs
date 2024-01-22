"use client";

import React from "react";
import { useForm } from "react-hook-form";
import styles from "./HookForm.module.scss";
import Button from "../Button/Button";

const Hook_Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: {}) => {
    console.log(data);
  };

  return (
    <>
    <div className={styles.Hook_Form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputs}>
          <div className="form-control">
            <input type="text" placeholder="Your Name" {...register("name")} />
          </div>
          <div className="form-control">
            <input type="email" placeholder="Email"  {...register("email")} />
          </div>
        </div>
        <div className="form-control">
          <textarea placeholder="Message" {...register("textarea")} />
        </div>
        <div className={styles.button}>
        <Button type="submit" text="Send Button"  color="#eee" bgColor="#ff006c" padding="1.5rem 5rem"/>
        </div>
      </form>
    </div>
    </>
  );
}

export default Hook_Form;