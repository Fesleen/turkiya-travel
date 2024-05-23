import React from 'react'
import styles from "./style.module.css"
import Button from "../common/button";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card__logo}>
          <h1 className={styles.cards__h1}>ISTANJOURNEY</h1>
        </div>
        <div className={styles.card__ul}>
          <ul className={styles.cards__ul}>
            <li><a className={styles.ul__li__a} href="">Home</a></li>
            <li><a className={styles.ul__li__a} href="">About</a></li>
            <li><a className={styles.ul__li__a} href="">Programs</a></li>
            <li><a className={styles.ul__li__a} href="">Blog</a></li>
            <li><a className={styles.ul__li__a} href="">Gallery</a></li>
          </ul>
        </div>
        <div className={styles.card__button}>
          <Button>Book a Tour</Button>
        </div>
        <div className={styles.hamburger}>
          <MenuIcon className={styles.hamburger} />
        </div>
      </div>
    </div>
  )
}

export default Header