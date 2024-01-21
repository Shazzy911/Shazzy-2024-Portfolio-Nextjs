"use client";

import React from 'react';
import styles from "./Button.module.scss";
import { useRouter } from 'next/navigation';
type buttonType = {
  type?: "submit" | "button" | "reset",
    text: string,
    url?: string,
    bgColor: string,
    color: string,
    padding?: string,
}
const Button = ({type, text, url, bgColor, color, padding}: buttonType) => {

    const router = useRouter();
  return (
    <button type={type} className={styles.Container} style={{backgroundColor: bgColor, color: color,padding: padding}} onClick={()=> url && router.push(url)}>{text}</button>
  )
}

export default Button