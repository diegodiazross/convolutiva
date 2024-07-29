import MainCarousel from "../components/MainCarousel";
import MachineLearningSection from "../components/MachineLearning";
import TransformationDigital from "../components/DigitalTransformation";
import Contacto from "./Contacto";

function Home() {
  return (
    <>
      <MainCarousel></MainCarousel>
      <MachineLearningSection></MachineLearningSection>
      <TransformationDigital></TransformationDigital>
      <Contacto></Contacto>
    </>
  );
}

export default Home;
