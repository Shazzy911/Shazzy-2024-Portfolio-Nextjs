import React from 'react';
import styles from "./Resume.module.scss";
import Card from '@/ui/Small-Component/Card/Card';
import { EducationData, ExperienceData } from '@/json/Exp_Edu';

const Resume = () => {

  return (
    <>
      <section className={styles.Container} id='resume'>
        <div className={styles.experience}>
          <h1>Experiences</h1>
          {
            ExperienceData.map((data) => (

              <Card key={data.id} items={data} />
            ))
          }
        </div>
        <div className={styles.education}>
          <h1>Educations</h1>
          {
            EducationData.map((data) => (

              <Card key={data.id} items={data} />
            ))
          }

        </div>
      </section>
    </>
  )
}

export default Resume