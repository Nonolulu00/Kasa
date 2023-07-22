import "./App.css";
import { Banner } from "../../components/Banner/Banner";
import { CardsContainer } from "../../components/CardGallery/CardContainer";
import Landscape from "../../Assets/images/Landscape.svg";
import { Layout } from "../../components/Layout/Layout";

function App() {
  return (
    <Layout>
      <div className="App">
        <Banner
          image={Landscape}
          text="Chez vous, partout et ailleurs"
        ></Banner>
        <CardsContainer />
      </div>
    </Layout>
  );
}

export default App;
