import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./components/Navbar";
import MainCarousel from "./components/MainCarousel";
import MachineLearningSection from "./components/MachineLearning";
import TransformationDigital from "./components/DigitalTransformation";

function App() {
  return (
    <>
      <Navigator></Navigator>
      <MainCarousel></MainCarousel>
      <MachineLearningSection></MachineLearningSection>
      <TransformationDigital></TransformationDigital>
    </>
  );
}

export default App;
