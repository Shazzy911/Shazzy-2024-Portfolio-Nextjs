import React from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import Hero from "@/images/undraw/undraw_software_engineer_lvl5.svg";
import Button from "@/ui/Small-Component/Button/Button";

const About = () => {

  
  return (
    <>
      <section id={styles.about}>
        <div className={styles.mainContainer}>
          {/* Main Container of About Section */}
          <div className={styles.aboutText}>
            {/* 1st Block of Main Container*/}
            <small className={styles.smallText}>
              Welcome to{" "}
              <span className={styles.mobileBlock}>my portfolio website!</span>
            </small>
            <h1 className={styles.headingOne}>
              <span className={styles.mr2}>Hey folks, I{"'"}m</span>
              <div className={styles.animatedInfo}>
                <span className={styles.headingItems}>Shahzaib Saleem</span>
                {/* <span className={styles.headingItems}>Web Designer</span>
                <span className={styles.headingItems}>UI Specialist</span> */}
              </div>
            </h1>

            <p className={styles.paragraph}>
              Building a successful product is a challenge. Im highly
              energetic in user experience design, interfaces and web
              development.
            </p>

            <div className={styles.customButton}>
              <Button text="Download Resume" url="/" bgColor="#eee" color="#5b5b5b"/>
              <Button text="Get a free quote" url="/" bgColor="#474559" color="#ffffff"/>
            </div>
          </div>
          <div className={styles.aboutImage}>
            {/* 2nd Block of Main Container */}
            <Image src={Hero} height={320} width={475} alt="Image not found" className={styles.img} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
