import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { PlacesGet } from "../../redux/places";

const Places = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PlacesGet());
  }, [dispatch]);

  const places = useSelector((state) => state.places.placesGet);
  const placesData = places?.data;
  const placesLoading = places.loading;
  const placesError = places.error;

  if (placesLoading) {
    return <h1>Loading...</h1>;
  }

  if (placesError) {
    return <h1>Error</h1>;
  }

  if (!placesData || placesData.length === 0) {
    return <h1>No data available</h1>;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.cards}>
          <div className={styles.cards__item}>
            <h1 className={styles.cards__h1}>Must-Visit Places in Istanbul</h1>
          </div>
          <div className={styles.cards__item}>
          <p className={styles.cards__p}>Istanbul, a mesmerizing blend of East and West, is a city that beckons with its rich history, vibrant culture, and stunning architecture. As you wander through its bustling streets, there are certain places that simply cannot be missed.</p>
        </div>
      </div>
    </div >
      <div className={styles.section}>
        {placesData.map((elem) => (
          <div className={styles.card}>
            <img className={styles.images} src={elem.images} alt="" />
            <h2 className={styles.cards__h2}>{elem.name}</h2>
          </div>
        ))}
      </div>
    </>

  )
}

export default Places