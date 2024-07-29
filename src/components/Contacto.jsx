import sobre from "../assets/envelope.svg";
import styles from "./Contacto.module.css";

function Contacto() {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["contacto"]}>
        <h5 className={styles["header"]}>¿Cómo te podemos ayudar?</h5>
        <div className="Container d-flex justify-content-center align-items-start">
          <img src={sobre} alt="icono sobre" style={{ width: "2rem", height: "2rem", color: "white" }} />
          <p>
            <b>&nbsp;Contacto:&nbsp;</b>
          </p>
          <i className={styles["correo"]}>alquimianalytics@gmail.com</i>
        </div>
      </div>
    </footer>
  );
}
export default Contacto;
