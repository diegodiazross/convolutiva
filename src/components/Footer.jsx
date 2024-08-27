import sobre from "../assets/envelope.svg";
import styles from "./Footer.module.css";
import network from "../assets/deep-learning.png";
function Footer() {
  return (
    <footer className={`${styles.footer}`}>

      <div className={styles["contacto"]}>
        <h5 className={styles["header"]}>¿Cómo te podemos ayudar?</h5>
        <div className="Container d-flex justify-content-center align-items-start">
          <img src={sobre} alt="icono sobre" className={styles["sobre"]} />
          <p>
            <b>&nbsp;Contacto:&nbsp;</b>
          </p>
          <i>alquimianalytics@gmail.com</i>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
