import React from "react";
import './Search.css';

const SearchBar = () => {
  return (
    <div className="width-100 Search-banner-section">
      <div className="Search-container">
        <h1 className="Search-banner-heading">
          Find The Best Job For Your Future
        </h1>
        <p className="Search-banner-para">
          It's a long established fact that a reader will be distracted by the
          readable
        </p>
        <div className="Search-bar-Container">
          <div className="search-sect">
            <input
              type="text"
              className="search-textbox"
              placeholder="Select Location"
            />
            <i
              className="fa fa-life-ring absolute top-4 right-4 text-gray-600"
              aria-hidden="true"
            ></i>
         </div>
          <div className="search-sect">
            <input
              type="text"
              className="search-textbox"
              placeholder="All categories"
            />
            <i
              className="fa fa-caret-down absolute top-4 right-4 text-gray-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="search-sect">
            <button className="search-button">
              <i className="fa fa-search mr-2" aria-hidden="true"></i> Search Here
            </button>
           </div>
          </div>
        </div>
    </div>
  );
};

export default SearchBar;
