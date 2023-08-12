/* eslint-disable react/prop-types */
import { BsSearch, BsHouseDoor } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const Search = ({
  jobSearchHandler,
  companySearchHandler,
  locationSearchHandler,
}) => {
  const [searchByJob, setSearchByJob] = useState("");
  const [searchByCompany, setSearchByCompany] = useState("");
  const [searchByLocation, setSearchByLocation] = useState("");

  const onCLickHandler = (e, value) => {
    e.preventDefault();
    if (e.target.name === "job") {
      jobSearchHandler(value);
    } else if (e.target.name === "company") {
      companySearchHandler(value);
    } else if (e.target.name === "location") {
      locationSearchHandler(value);
    }
  };

  const clearJobInput = () => {
    setSearchByJob("");
  };
  const clearCompanyInput = () => {
    setSearchByCompany("");
  };
  const clearLocationInput = () => {
    setSearchByLocation("");
  };
  return (
    <div className="searchDiv grid gap-10 bg-whiteColor rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-md shadow-greyColor">
          <div className="flex gap-2 items-center">
            <BsSearch className="text-[25px] icon" />
            {/* job */}
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job..."
              value={searchByJob}
              onChange={(e) => setSearchByJob(e.target.value)}
            />
            <AiOutlineCloseCircle
              onClick={clearJobInput}
              className="text-[30px] text-[#a6a6a6] hover:text-textColor icon"
            />
            <button
              name="job"
              onClick={() => onCLickHandler(event, searchByJob)}
            >
              Submit
            </button>
          </div>
          {/* company */}
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Company..."
              value={searchByCompany}
              onChange={(e) => setSearchByCompany(e.target.value)}
            />
            <AiOutlineCloseCircle
              onClick={clearCompanyInput}
              className="text-[30px] text-[#a6a6a6] hover:text-textColor icon"
            />
            <button
              name="company"
              onClick={() => onCLickHandler(event, searchByCompany)}
            >
              Submit
            </button>
          </div>
          {/* location */}
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Location..."
              value={searchByLocation}
              onChange={(e) => setSearchByLocation(e.target.value)}
            />
            <AiOutlineCloseCircle
              onClick={clearLocationInput}
              className="text-[30px] text-[#a6a6a6] hover:text-textColor icon"
            />
            <button
              name="location"
              onClick={() => onCLickHandler(event, searchByLocation)}
            >
              Submit
            </button>
          </div>

          <button className=" bg-blue2Color h-full p-5 px-10 rounde-[10px] text-white cursor-pointer hover:bg-blue-500">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text{#808080} font-semibold">
            Sort by:
          </label>
          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text{#808080} font-semibold">
            Type:
          </label>
          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-Time</option>
            <option value="">Part-TIme</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="level" className="text{#808080} font-semibold">
            Level:
          </label>
          <select
            name=""
            id="level"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className="text-[#a1a1a1] cursor-pointer ">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
