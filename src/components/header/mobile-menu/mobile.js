"use client";
import { useState } from "react";
import styles from "./mobile.module.css";
import Image from "next/image";
import RegisterButton from "@/components/register-button/button";
export default function MobileMenu() {
  const [menuList, setMenuList] = useState(false);

  const handleClick = () => {
    setMenuList(!menuList);
  };

  return (
    <div className={styles.MobileMenu}>
      {menuList ? (
        <div className={styles.menuList}>
          <div className={styles.menuList_links}>
          <ul>
            <li>Timeline</li>
            <li>Overview</li>
            <li>FAQs</li>
            <li>Contacts</li>
            <li>
             <RegisterButton />
            </li>
          </ul>
          </div>
          <div onClick={handleClick}>
            <img className={styles.img} src="/closebtn.svg" alt="omo" />
          </div>
        </div>
      ) : (
        <div onClick={handleClick}>
          <img className={styles.img} src="/openbtn.svg" alt="omo" />
        </div>
      )}
    </div>
  );
}
