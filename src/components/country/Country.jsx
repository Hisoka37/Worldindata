import { useState, useEffect } from "react";
import "./country.css";
import { useSelector, useDispatch } from "react-redux";
import { displayAllcountries, searchByRegion } from "../../Redux/countries/countriesAction";
import { reset, setSearchTerm } from "../../Redux/countries/countriesSlice";
import { Link } from "react-router-dom";

const Country = () => {
  const { countriesData, success, loading, error, region, searchTerm } = useSelector(
    (store) => store.country
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayAllcountries());
    if (region) {
      dispatch(searchByRegion(region));
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success, region]);

  const data = countriesData.filter((item) =>
    item.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        data.map((item, index) => {
          return (
            <Link className="country-card" key={index} to={`/${item.cioc}`}>
              <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
              <div className="country-content">
                <h3>{item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;
