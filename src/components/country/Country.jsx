import { useState, useEffect } from "react";
import "./country.css";
import { useSelector, useDispatch } from "react-redux";
import { displayAllcountries } from "../../Redux/countries/countriesAction";
import {reset} from "../../Redux/countries/countriesSlice";
import { Link } from "react-router-dom";


const Country = () => {
  const { countriesData, success, loading, error } = useSelector(
    (store) => store.country
  );
  const dispatch = useDispatch();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    dispatch(displayAllcountries());
    if (success) {
      setCountryData(countriesData);
    }
    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);
  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        countriesData.map((item, index) => {
          return (
            <Link className="country-card" key ={index} to ={`/${item.cioc}`}>
              <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
              <div className="country-content">
                <h3> </h3>
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
