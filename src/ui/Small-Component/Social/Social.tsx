import React from 'react';
import styles from "./Social.module.scss";
import Link from "next/link";
import { FaGoogle, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';


const Social = () => {
  return (
    <>
      <div className={styles.Container} >
        <Link href="https://shorturl.at/lmKLV"><FaLinkedin className={styles.items} /></Link>
        <Link href="https://shorturl.at/hlqQW"><FaGithub className={styles.items} /></Link>
        <Link href=" https://shorturl.at/hiA67"><FaFacebook className={styles.items} /></Link>
        <Link href="mailto:shazzy.mern@gmail.com"><FaGoogle className={styles.items} /></Link>
      </div>
    </>
  )
}

export default Social;