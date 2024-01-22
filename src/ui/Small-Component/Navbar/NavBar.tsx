import React from "react";
import Link from "next/link";
import links from "@/json/links";
import { AiOutlineUser } from "react-icons/ai";
import { RiMenu3Fill } from "react-icons/ri";
import { PiSunBold } from "react-icons/pi";
import styles from "./NavBar.module.scss";



const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.NavContainer}>  
        {/* In Nav Container we have 3 Div Blocks */}

          <div className={styles.menuLogo}>
            {/* ====== 1st Block Part of Container ======== */}
            <Link href="/">
              <AiOutlineUser className={styles.user} />
              <h3>Shahzaib</h3>
            </Link>
            <div className={styles.menu}>
              <RiMenu3Fill  className={styles.menubar} />
            </div>
          </div>

          <div className={styles.navbarItems}>
            {/* ====== 2nd Block Part of Container ======== */}
            {links.map(({ id, text, url }) => (
              <Link key={id} href={url}>
                <h4>{text}</h4>
              </Link>
            ))}
          </div>

          <div>
            {/* ====== 3rd Block Part of Container ======== */}
            <div className={styles.colorBox}>
              <Link href="/">
                <PiSunBold className={styles.color} />
                <h4>Color mode</h4>
              </Link>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
