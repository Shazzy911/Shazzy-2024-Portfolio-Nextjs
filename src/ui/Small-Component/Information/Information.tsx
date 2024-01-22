import React from 'react'
import styles from "./Information.module.scss";
import Social from '../Social/Social';
import { FaDribbble, FaInstagram, FaYoutube } from 'react-icons/fa';
const Information = () => {
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.maps}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9758.890514568644!2d71.37121217325783!3d30.143157276899494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1705816979874!5m2!1sen!2s" width="450" height="306" style={{ border: "0" }} loading="lazy" ></iframe>
                </div>
                <div className={styles.InfoContainer}>
                    <div className={styles.Information}>
                        <h3 className={styles.h3Heading}>Say Hello</h3>
                        <p>03028862387</p>
                        <p>shazzy.mern@gmail.com</p>

                    </div>
                    <div className={styles.socialContainer} >
                        <FaDribbble className={styles.items}/>
                        <FaYoutube className={styles.items}/>
                        <FaInstagram className={styles.items}/>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Information


// allowfullscreen=""

// referrerpolicy="no-referrer-when-downgrade"