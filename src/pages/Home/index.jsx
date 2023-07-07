import "./App.css";
import { Banner } from "../../components/Banner/Banner";
import { CardsContainer } from "../../components/CardGallery/CardContainer";
import Landscape from "../../Assets/images/Landscape.svg";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Banner
          image={Landscape}
          text="Chez vous, partout et ailleurs"
        ></Banner>
        <CardsContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
