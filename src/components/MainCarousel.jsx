import styles from "./MainCarousel.module.css";
import dashboard1 from "../assets/dashboard1.jpg";
import ml from "../assets/machine_learning.jpg";
import app from "../assets/desarollo_apps.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function MainCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className={styles["carousel-img-container"]}>
          <img src={dashboard1} alt="dasbboard" className="d-block w-80  carousel-img" />
        </div>
        <Carousel.Caption>
          <h3>Visualización moderna de tus datos</h3>
          <p>Porque un buen gráfico dice mas que mil palabras</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles["carousel-img-container"]}>
          <img src={ml} className="d-block w-80  carousel-img" alt="machine learning" />
        </div>
        <Carousel.Caption>
          <h3>AI & Machine Learning</h3>
          <p>Soluciones inteligentes para un mundo complejo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className={styles["carousel-img-container"]}>
          <img src={app} className="d-block w-80 carousel-img" alt="apps" />
        </div>
        <Carousel.Caption>
          <h3>Desarrollo de apps</h3>
          <p>despliegue en la nube</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MainCarousel;
