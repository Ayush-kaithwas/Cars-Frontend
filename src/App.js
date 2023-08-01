import "./App.css";
import Navbar from "./components/navbar";
import Template from "./components/tempelate";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

function App() {

  const [CarInfo, setCarInfo] = useState([]);
  const [carData, setCarData] = useState(CarInfo);

  const filterItem = (category) => {
    const update = CarInfo.filter((curr) => {
      return curr.category === category;
    });

    setCarData(update);
  };

  const ALL = () => {
    setCarData(CarInfo);
  };

  

  useEffect(() => {
    fetch("https://cars-website.onrender.com/carData", {
      method: "GET",
    })
      .then((res)=> res.json())
      .then((data) => {
        setCarInfo(data.data);
      })
  }, []);

  useEffect(() => {
    //Runs on the first render
    const initial = CarInfo.filter((e) => {
      return e.category === "Sedan";
    });
    setCarData(initial);
  }, []);

  return (
    <>
      <main className="site-wrapper">
        <Navbar filterItem={filterItem} ALL={ALL} />
        <Template carData={carData} />
      </main>
      <Footer />
    </>
  );
}

export default App;
