import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Marquee from "./components/Marquee/Marquee";
import Carousel from "./components/Carousel/Carousel";
import InfoPage from "./components/InfoPage/InfoPage";
// import Industries from "./components/Industries/Industries";
import  SolutionsPage from "./components/SolutionsPage/SolutionsPage";
import IndustriesPage from "./components/IndustriesPage/IndustriesPage";
import PresencePage from "./components/PresencePage/PresencePage";
import Footer from "./components/Footer/Footer";

function App() {
  const slides = [
    {
      image: "src/assets/banner.jpg",
    },
    {
      image: "src/assets/banner.jpg",
    },
    {
      image: "src/assets/banner.jpg",
    },
    {
      image: "src/assets/banner.jpg",
    },
    {
      image: "src/assets/banner.jpg",
    },
  ];
  return (
    <div className="App">
      <Marquee />
      <Navbar />
      <Carousel slides={slides} interval={5000} />
      <InfoPage />
      <IndustriesPage/>
      <SolutionsPage/>
      <PresencePage/>
      <Footer/>
      {/* Add other components here as needed */}
    </div>
  );
}

export default App;
