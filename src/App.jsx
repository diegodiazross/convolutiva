import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./components/Navbar";
import MainCarousel from "./components/MainCarousel";
import MachineLearningSection from "./components/MachineLearning";

function App() {
  return (
    <>
      <Navigator></Navigator>
      <MainCarousel></MainCarousel>
      <MachineLearningSection></MachineLearningSection>
    </>
  );
}

export default App;
