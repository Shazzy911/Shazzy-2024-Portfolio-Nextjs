import React from 'react';
import styles from "./Form.module.scss";
import Hook_Form from '../Hook-Form/HookForm';
const Form = () => {
  return (
    <>
      <div className={styles.formContainer}>
        <div className={styles.headingContainer}>
          <h1>Interested to work together?</h1>
          <h1>Let{"'"}s talk</h1>
         
        </div>
        
            <Hook_Form/>

         
      </div>
    
    </>
  )
}

export default Form