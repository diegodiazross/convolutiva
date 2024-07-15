import Image from "react-bootstrap/Image";
import styles from "./DigitalTransformation.module.css";
import arrow from "../assets/arrow.svg";
import double_arrow from "../assets/double_arrow.svg";

function TransformationDigital() {
  return (
    <div>
      <div className={styles["main-header"]}>
        <h1> Transformación Digital</h1>
      </div>
      <div className={styles["arrow-container"]}>
        <Image className={styles["svg"]} src={arrow} alt="transformación digital" />
      </div>
      <div className={styles["container-stages"]}>
        <div className={`${styles["stages"]} ${styles["first"]}`}>
          <h5 className={styles["stage-header"]}>Etapa 1: Reactiva </h5>
          <p className={styles["stage-description"]}>Cada unidad de la empresa posee sus propias fuentes de información las cuales son descentralizadas e informales. Por lo general corresponden a hojas de excel.</p>
        </div>
        <div className={`${styles["stages"]} ${styles["second"]}`}>
          <h5 className={styles["stage-header"]}>Etapa 2: Informativa </h5>
          <p className={styles["stage-description"]}>Comienza con una incipiente centralización en los datos, los reportes corresponden a análisis y/o tendencias del pasado. </p>
        </div>
        <div className={`${styles["stages"]} ${styles["third"]}`}>
          <h5 className={styles["stage-header"]}>Etapa 3: Predictiva </h5>
          <p className={styles["stage-description"]}>Se alcanza cuando la compañía se ha movido a la nube para lidiar con el almacenamiento de grandes volúmenes y variedad en los tipos de datos que sus procesos generan. Se utilizan herramientas de analítica avanzada en la toma de decisiones.</p>
        </div>
        <div className={`${styles["stages"]} ${styles["fourth"]}`}>
          <h5 className={styles["stage-header"]}>Etapa 4: Transformativa</h5>
          <p className={styles["stage-description"]}>Arquitectura que escala fácilmente,Los datos transforman el negocio para impulsar los resultados deseados.</p>
        </div>
      </div>
      <div>
        <Image className={styles["double-arrow"]} src={double_arrow}/>
      </div>
    </div>
  );
}

export default TransformationDigital;
