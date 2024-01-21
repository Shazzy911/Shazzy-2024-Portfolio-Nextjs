import React from 'react';
import styles from "./Contact.module.scss";
import Information from '@/ui/Small-Component/Information/Information';
import Form from '@/ui/Small-Component/Form/Form';

const Contact = () => {
  return (
    <>
      <div className={styles.Container} id="contact">
        <Information/>
        <Form/>
      </div>
    </>
  )
}

export default Contact