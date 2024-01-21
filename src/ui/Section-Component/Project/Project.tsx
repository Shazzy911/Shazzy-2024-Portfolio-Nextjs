import React from 'react';
import styles from "./Project.module.scss";
import Sliding from '@/ui/Small-Component/Slider/Sliding';

const Project = () => {
  return (
    <>
      <section className={styles.Container} id='project'>
        <h1>Things I have developed for digital <br /> media agencies</h1>
        <div className={styles.slider}>
        <Sliding />
        </div>
      </section>
    </>
    
  )
}

export default Project