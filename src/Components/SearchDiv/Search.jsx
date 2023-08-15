/* eslint-disable react/prop-types */
import { BsSearch, BsHouseDoor } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";

const Search = ({ searchData }) => {
  const [searchInputs, setSearchInputs] = useState([
    {
      name: "title",
      value: "",
    },
    {
      name: "company",
      value: "",
    },
    {
      name: "location",
      value: "",
    },
  ]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setSearchInputs((prevState) => {
      const updateState = prevState.map((input) => {
        if (input.name === name) {
          input.value = value;
        }
        return input;
      });
      return updateState;
    });
  };

  const clearInputJob = () => {
    setSearchInputs((prevState) => [...prevState, (prevState[0].value = "")]);
  };
  const clearInputCompany = () => {
    setSearchInputs((prevState) => [...prevState, (prevState[1].value = "")]);
  };
  const clearInputLocation = () => {
    setSearchInputs((prevState) => [...prevState, (prevState[2].value = "")]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    try {
      const filteredData = searchInputs.filter((input) => {
        return input.value.trim().length > 0;
      });

      if (filteredData.length === 0) {
        alert("Please enter input data");
        return;
      }
      searchData(filteredData);
    } catch (e) {
      console.error(`error occured ${e}`);
    }
  };

  return (
    <div className="searchDiv grid gap-10 bg-whiteColor rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-md shadow-greyColor">
          <div className="flex gap-2 items-center">
            <BsSearch className="text-[25px] icon" />
            {/* job */}
            <input
              name="title"
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search Job..."
              value={searchInputs[0].value}
              onChange={onChangeHandler}
            />
            <AiOutlineCloseCircle
              onClick={clearInputJob}
              className="text-[30px] text-[#a6a6a6] hover:text-textColor icon"
            />
          </div>
          {/* company */}
          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              name="company"
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Company..."
              value={searchInputs[1].value}
              onChange={onChangeHandler}
            />
            <AiOutlineCloseCircle
              onClick={clearInputCompany}
              className="text-[30px] text-[#a6a6a6] hover:text-textColor icon"
            />
          </div>
          {/* location */}
          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              name="location"
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Location..."
              value={searchInputs[2].value}
              onChange={onChangeHandler}
            />
            <AiOutlineCloseCircle
              onClick={clearInputLocation}
              className="text-[30px] text-[#a6a6a6] hover:text-textColor icon"
            />
          </div>

          <button
            onClick={(e) => {
              onSubmitHandler(e);
            }}
            className=" bg-blue2Color h-full p-5 px-10 rounde-[10px] text-white cursor-pointer hover:bg-blue-500"
          >
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
