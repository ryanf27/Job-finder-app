import Footer from "./Components/FooterDiv/Footer";
import Jobs from "./Components/JobDiv/Jobs";
import Navbar from "./Components/NavBar/Navbar";
import Search from "./Components/SearchDiv/Search";
import Value from "./Components/ValueDiv/Value";
import { useState } from "react";
import Data from "./Data";

const App = () => {
  const [filteredData, setFilteredData] = useState(Data);

  const jobSearchHandler = (jobQuery) => {
    const dataFiltered = Data.filter((d) =>
      d.title.toLowerCase().includes(jobQuery.toLowerCase())
    );
    setFilteredData(dataFiltered);
  };

  const companySearchHandler = (companyQuery) => {
    const dataFiltered = Data.filter((d) =>
      d.company.toLowerCase().includes(companyQuery.toLowerCase())
    );
    setFilteredData(dataFiltered);
  };

  const locationSearchHandler = (locationQuery) => {
    const dataFiltered = Data.filter((d) =>
      d.location.toLowerCase().includes(locationQuery.toLowerCase())
    );
    setFilteredData(dataFiltered);
  };

  // useEffect(() => {
  //   if (jobSearchHandler) {
  //     setFilteredData(jobSearchHandler);
  //   } else if (companySearchHandler) {
  //     setFilteredData(companySearchHandler);
  //   } else if (locationSearchHandler) {
  //     setFilteredData(locationSearchHandler);
  //   }
  // }, [filteredData]);

  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search
        jobSearchHandler={jobSearchHandler}
        companySearchHandler={companySearchHandler}
        locationSearchHandler={locationSearchHandler}
      />
      <Jobs filteredData={filteredData} />
      <Value />
      <Footer />
    </div>
  );
};

export default App;
