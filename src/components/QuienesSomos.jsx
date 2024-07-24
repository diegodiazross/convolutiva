import styles from "../components/QuienesSomos.module.css";

function QuienesSomos() {
  return (
    <div className={`Container ${styles.container}`}>
      <h2> Nuestra Misión </h2>
      <p>Según una estimación de Forrester, hasta el 70-80% de los datos generados por las empresas nunca se utilizan para análisis. Alchimia Analytics nació con el objetivo de transformar los datos en conocimiento relevante. Nuestro objetivo es ayudar a las empresas en su camino hacia la transformación digital. Para esto utilizamos técnicas modernas de inteligencia de negocio.</p>
    </div>
  );
}

export default QuienesSomos;
