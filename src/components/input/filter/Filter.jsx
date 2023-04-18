import { useEffect, useState } from "react";
import "./filter.css";
import { useDispatch } from "react-redux";
import { reset, setRegion } from "../../../Redux/countries/countriesSlice";

const Filter = () => {
  const regions = ["Africas", "America", "Asia", "Europe", "Australia"];
  const [filter, setFilter] = useState("");
  const [displayDropDown, setDisplayDropdown] = useState(false);

  const handleDrodown = () => {
    setDisplayDropdown(!displayDropDown);
  };

  return (
    <section className="filter-container">
      <div className="filter">
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value={filter}
          className="filter-input"
        />

        <i className="fa fa-arrow-down" onClick={handleDrodown}></i>
      </div>
      {displayDropDown ? (
        <div className="dropdown">
          {regions.map((item, index) => {
            return (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => {
                  setFilter(item);
                  handleDrodown();
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
      ) : null}
    </section>
  );
};

export default Filter;
