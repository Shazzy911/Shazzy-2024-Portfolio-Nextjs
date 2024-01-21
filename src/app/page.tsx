import About from '@/ui/Section-Component/About/About'
import Footer from '@/ui/Section-Component/Footer/Footer'
import Resume from '@/ui/Section-Component/Resume/Resume'
import React from 'react'
import Projects from '@/ui/Section-Component/Project/Project';
import Contact from '@/ui/Section-Component/Contact/Contact';
import styles from "./page.module.scss";

const HomePage = () => {
 
  return (
    < >
      <div className={styles.Container}>

      <About />
      <Projects/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>

    </>
  )
}

export default HomePage