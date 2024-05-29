import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { AboutUsGet } from "../../redux/about_us";

const AboutUs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AboutUsGet());
  }, [dispatch]);

  const about = useSelector((state) => state.aboutUs.aboutUsGet);
  const aboutData = about?.data;
  const aboutLoading = about.loading;
  const aboutError = about.error;

  if (aboutLoading) {
    return <h1>Loading...</h1>;
  }

  if (aboutError) {
    return <h1>Error</h1>;
  }

  if (!aboutData || aboutData.length === 0) {
    return <h1>No data available</h1>;
  }

  return (
    <div className={styles.container}  id='about'>
      <div className={styles.cards__top}>
        <p className={styles.cards__p}>About Us</p>
        <h1 className={styles.cards__h1}>One of the most popular travel agencies in 2023</h1>
      </div>
      {aboutData.map((elem) => (
        <div key={elem.id} className={styles.card}>
          <img className={styles.images} src={elem.instaImages} alt="image" />
          <div className={styles.card__right}>
            <div className={styles.card__right__top}>
              <div className={styles.card__right__top__item}>
                <strong className={styles.card__strong}>{elem.number_1}</strong>
                <p className={styles.card__p}>{elem.desc_1}</p>
              </div>
              <div className={styles.card__right__top__item}>
                <strong className={styles.card__strong}>{elem.number_2}</strong>
                <p className={styles.card__p}>{elem.desc_2}</p>
              </div>
            </div>
            <div className={styles.card__right__bottom}>
              <div className={styles.card__right__bottom__item}>
                <strong className={styles.card__strong}>{elem.number_3}</strong>
                <p className={styles.card__p}>{elem.desc_3}</p>
              </div>
              <div className={styles.card__right__bottom__item}>
                <strong className={styles.card__strong}>{elem.number_4}</strong>
                <p className={styles.card__p}>{elem.desc_4}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
