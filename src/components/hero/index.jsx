import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { HeroGet } from "../../redux/hero";
import Button from "../common/button2";

const Hero = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(HeroGet());
  }, [dispatch]);

  const hero = useSelector((state) => state.hero.heroGet);
  const heroData = hero?.data;
  const heroLoading = hero.loading;
  const heroError = hero.error;

  if (heroLoading) {
    return <h1>Loading...</h1>;
  }

  if (heroError) {
    return <h1>Error</h1>;
  }

  if (!heroData || heroData.length === 0) {
    return <h1>No data available</h1>; 
  }

  return (
    <div className={styles.container}>
      <div className={styles.components}>
        {heroData.map((elem) => (
            <div key={elem.id} className={styles.card}>
              <div className={styles.card__left}>
                <h1 className={styles.cards__title}>{elem.title}</h1>
                <strong className={styles.cards__price}>{elem.description}</strong>
                <Button>Read More</Button>
              </div>
              <img className={styles.images} src={elem.images} alt="image" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
