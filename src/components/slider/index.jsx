import Carousel from 'react-bootstrap/Carousel';
import { useDispatch, useSelector } from "react-redux";
import { HeroGet } from "../../redux/hero";
import { useEffect, useState } from 'react';
import styles from "./style.module.css";
import ExampleCarouselImage from "../../assets/images/header/image.png";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

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
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {heroData.map((elem, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={ExampleCarouselImage}
              alt={`Slide ${idx + 1}`}
            />
            <Carousel.Caption>
              <h3>{`Slide ${idx + 1} label`}</h3>
              <p>{elem.description || "No description available."}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
