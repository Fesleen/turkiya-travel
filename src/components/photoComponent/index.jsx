import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./style.module.css";
import { PhotoGet } from "../../redux/photo";

const Photo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(PhotoGet());
  }, [dispatch]);

  const photo = useSelector((state) => state.photo.photoGet);
  const photoData = photo?.data;
  const photoLoading = photo.loading;
  const photoError = photo.error;

  if (photoLoading) {
    return <h1>Loading...</h1>;
  }

  if (photoError) {
    return <h1>Error</h1>;
  }

  if (!photoData || photoData.length === 0) {
    return <h1>No data available</h1>;
  }
  return (
    <>
      <div className={styles.container} id='galery'>
        <div className={styles.cards}>
          <h1 className={styles.cards__h1}>A Captivating Photo Gallery</h1>
        </div>
      </div>
      <div className={styles.section}>
        {photoData.map((elem) => (
          <>
            <img className={styles.images} src={elem.images} alt="" />
          </>
        ))}
      </div>
    </>

  )
}

export default Photo