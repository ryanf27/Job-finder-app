/* eslint-disable react/prop-types */
import "./Search.css";

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
    <div className="searchBar">
      <form action="" className="inputContainer">
        <div className="inputBox">
          <BsSearch className="inputIcon" />
          {/* job */}
          <input
            name="title"
            type="text"
            className="inputField"
            placeholder="Search Job..."
            value={searchInputs[0].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle onClick={clearInputJob} className="clearIcon" />
        </div>
        {/* company */}
        <div className="inputBox">
          <BsHouseDoor className="inputIcon" />
          <input
            name="company"
            type="text"
            className="inputField"
            placeholder="Search By Company..."
            value={searchInputs[1].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputCompany}
            className="clearIcon"
          />
        </div>
        {/* location */}
        <div className="inputBox">
          <CiLocationOn className="inputIcon" />
          <input
            name="location"
            type="text"
            className="inputField"
            placeholder="Search By Location..."
            value={searchInputs[2].value}
            onChange={onChangeHandler}
          />
          <AiOutlineCloseCircle
            onClick={clearInputLocation}
            className="clearIcon"
          />
        </div>

        <button
          onClick={(e) => {
            onSubmitHandler(e);
          }}
          className="searchButton"
        >
          Search
        </button>
      </form>

      <div className="dropdownContainer">
        <div>
          <label htmlFor="relevance" className="dropdownLabel">
            Sort by:
          </label>
          <select name="" id="relevance" className="dropdownSelect">
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="dropdownLabel">
            Type:
          </label>
          <select name="" id="type" className="dropdownSelect">
            <option value="">Full-Time</option>
            <option value="">Part-TIme</option>
            <option value="">Remote</option>
            <option value="">Contract</option>
          </select>
        </div>
        <div>
          <label htmlFor="level" className="dropdownLabel">
            Level:
          </label>
          <select name="" id="level" className="dropdownSelect">
            <option value="">Senior</option>
            <option value="">Beginner</option>
            <option value="">Intermediate</option>
            <option value="">Advocate</option>
          </select>
        </div>

        <span className="clearAll">Clear All</span>
      </div>
    </div>
  );
};

export default Search;
