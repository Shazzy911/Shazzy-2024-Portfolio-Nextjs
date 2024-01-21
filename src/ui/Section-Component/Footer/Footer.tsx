import React from 'react';
import styles from "./Footer.module.scss";
import Social from '@/ui/Small-Component/Social/Social';

const Footer = () => {
    return (
        <>
            <div className={styles.Container}>

                <p>
                        Copyright &copy; 2024 Shahzaib Saleem . All rights reserved
                    
                </p>
                <Social/>

            </div>
        </>
    )
}

export default Footer