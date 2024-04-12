import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import PopulationGraph from "../PopulationGraph";
import CryptocurrencyPrices from "../CryptocurrencyPrices";
import "./index.css";

const Home = () => {
  const { isSidebarOpen } = useContext(SidebarContext);
  return (
    <div className={`home-container ${isSidebarOpen ? "change" : ""}`}>
      <h2 className="heading">Home Page</h2>
      <PopulationGraph />
      <CryptocurrencyPrices />
    </div>
  );
};

export default Home;
