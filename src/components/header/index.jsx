import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import Button from '../common/button';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const Header = () => {
  const [data, setData] = useState([]);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (e) => {
    await window.localStorage.setItem('i18nextLng', e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  useEffect(() => {
    axios.get('https://api.balon.uz/category')
      .then((res) => setData(res.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card__logo}>
          <h1 className={styles.cards__h1}>ISTANJOURNEY</h1>
        </div>
        <div className={styles.card__ul}>
          <ul className={styles.cards__ul}>
            <li><a className={styles.ul__li__a} href="#home">{t("Header.home")}</a></li>
            <li><a className={styles.ul__li__a} href="#about">{t("Header.about")}</a></li>
            <li><a className={styles.ul__li__a} href="#programs">{t("Header.programs")}</a></li>
            <li><a className={styles.ul__li__a} href="#blog">{t("Header.blog")}</a></li>
            <li><a className={styles.ul__li__a} href="#gallery">{t("Header.gallery")}</a></li>
          </ul>
        </div>
        <div className={styles.card__button}>
          <Button>{t("Header.bookATour")}</Button>
        </div>
        <div>
          <select onChange={handleLanguageChange}>
          <option value="eng">English</option>
            <option value="uz">Uzbek</option>
            <option value="ru">Russian</option>
          </select>
        </div>
        <div className={styles.hamburger}>
          <MenuIcon className={styles.hamburger} />
        </div>
      </div>
    </div>
  );
};

export default Header;
