import Footer from "./Components/FooterDiv/Footer";
import Jobs from "./Components/JobDiv/Jobs";
import Navbar from "./Components/NavBar/Navbar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";
import { useState } from "react";
import Data from "./Data";

const App = () => {
  const [filteredData, setFilteredData] = useState(Data);

  const searchData = (inputData) => {
    const newData = Data.filter((d) => {
      return inputData.every((el) => {
        return d[el.name].toLowerCase().includes(el.value.toLowerCase());
      });
    });
    console.log(newData);
    setFilteredData(newData);
  };

  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search searchData={searchData} />
      <Jobs filteredData={filteredData} />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
