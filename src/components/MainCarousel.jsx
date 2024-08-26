// import styles from "./MainCarousel.module.css";
import dashboard1 from "../assets/dashboard1.jpg";
import ai from "../assets/brain_ai.jpg";
import app from "../assets/desarollo_apps.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

function MainCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section>
      <Carousel className="mx-3" fade activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Image src={ai} rounded alt="machine learning" height="400px" width="100%" />
          <Carousel.Caption>
            <h3>AI & Machine Learning</h3>
            <p>Soluciones inteligentes para un mundo complejo</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={dashboard1} rounded height="400px" width="100%" />
          <Carousel.Caption>
            <h3>Visualización en tiempo real de tus datos</h3>
            <p>Monitorea los resultados de tu empresa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={app} rounded alt="apps" height="400px" width="100%" />
          <Carousel.Caption>
            <h3>Desarrollo de apps</h3>
            <p>Aplicaciones modernas</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default MainCarousel;
