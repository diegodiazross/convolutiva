import Image from "react-bootstrap/Image";
import sobre from "../assets/envelope.svg";
import styles from "./Footer.module.css";
import icon from "../assets/main-icon.svg";
function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={styles["contacto"]}>
        <h5 className={styles["header"]}>¿Cómo te podemos ayudar?</h5>
        <div className="Container d-flex justify-content-center align-items-center">
          <Image className={styles["icon"]} src={icon}/>
          <Image src={sobre} alt="icono sobre" className={styles["sobre"]} />
          <div>
          &nbsp;Contacto:&nbsp;
          <i>alquimianalytics@gmail.com</i>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
