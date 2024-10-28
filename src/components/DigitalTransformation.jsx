import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
// import transfomation from "../assets/digital_transformation.jpg";
import transfomation from "../assets/data.jpg";

import styles from "./DigitalTransformation.module.css";
function TransformationDigital() {
  return (
    <section className="m-3">
      <h2 className="m-2 text-center">Transformación Digital</h2>
      <h5 className="text-center">¿ En qué etapa se encuentra tu empresa, en la transformación digital ? </h5>
      <Image src={transfomation} rounded height="400px" width="100%" />
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header className={styles["accordion-header"]}> Etapa Reactiva</Accordion.Header>
          <Accordion.Body className={styles["accordion-body"]}>Cada unidad de la empresa posee sus propias fuentes de información las cuales son descentralizadas e informales. Por lo general corresponde a hojas de excel.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className={styles["accordion-header"]}>Etapa Informativa</Accordion.Header>
          <Accordion.Body className={styles["accordion-body"]}>Comienza con una incipiente centralización en los datos, los reportes corresponden a análisis y/o tendencias del pasado.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className={styles["accordion-header"]}>Etapa Predictiva</Accordion.Header>
          <Accordion.Body className={styles["accordion-body"]}>Se alcanza cuando la compañía se ha movido a la nube para lidiar con el almacenamiento de grandes volúmenes y variedad en los tipos de datos que sus procesos generan. Se utilizan herramientas de analítica avanzada en la toma de decisiones.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className={styles["accordion-header"]}>Etapa Transformativa</Accordion.Header>
          <Accordion.Body className={styles["accordion-body"]}>Arquitectura que escala fácilmente,Los datos transforman el negocio para impulsar los resultados deseados.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </section>
  );
}

export default TransformationDigital;
