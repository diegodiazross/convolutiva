import styles from "../components/Contacto.module.css";
import Image from "react-bootstrap/Image";
// import contacto from "../assets/machine_learning.jpg";
import contacto from "../assets/deepmind.jpg";

function Contacto() {
  return (
    <div className={styles['contenedor']}>
      <div className={styles['texto-superpuesto']}>
      Para mas información contactanos a nuestro correo: convolutia@gmail.com </div>
    </div>
  );
}

export default Contacto;
