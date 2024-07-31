import styles from "../components/Contacto.module.css";
import Image from "react-bootstrap/Image";
import contacto from "../assets/machine_learning.jpg";

function Contacto() {
  return (
    <div className={styles.container}>
      <Image src={contacto} alt="imagen-fondo" fluid className={styles["background-image"]} />
      <div className={styles["overlay-header"]}>
        <h2>Para cualquier consulta que tengas, contactanos a:</h2>
        <a href="mailto:convolutia@gmail.com">convolutia@gmail.com</a>
      </div>
    </div>
  );
}

export default Contacto;
