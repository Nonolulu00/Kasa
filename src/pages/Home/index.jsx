import "./App.css";
import { Banner } from "../../components/Banner/Banner";
import { CardsContainer } from "../../components/CardGallery/CardContainer";
import Landscape from "../../Assets/Landscape.svg";

function App() {
  return (
    <div className="App">
      <Banner image={Landscape} text="Chez vous, partout et ailleurs"></Banner>

      <CardsContainer />
    </div>
  );
}

export default App;
