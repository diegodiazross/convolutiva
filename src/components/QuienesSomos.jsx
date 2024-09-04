import styles from "../components/QuienesSomos.module.css";

function QuienesSomos() {
  return (
    <div className={`Container ${styles.container}`}>
      <h2 className="text-center"> Nuestra Misión </h2>
      <p className="text-start text-wrap">Convolutia nace el 2024, buscamos ayudar en la transformación digital de las empresas, mediante el uso de IA y machine learning en conjunto con las tecnologías de la nube. Contamos con años de experiencia en distintos rubros.  </p>
    </div>
  );
}

export default QuienesSomos;
