import { useState, useEffect } from "react";
import "./country.css";
import { useSelector, useDispatch } from "react-redux";
import { displayAllcountries } from "../../Redux/countries/countriesAction";
import {reset} from "../../Redux/countries/countriesSlice";

const Country = () => {
  const { countriesData, success, loading, error } = useSelector(
    (state) => state.country
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
        countryData.length > 0 &&
        countryData.map((item, index) => {
          return (
            <div className="country-card" key ="">
              <img src={item.flags.png} alt={item.flags.alt} className="country-image" />
              <div className="country-content">
                <h3> </h3>
                <p>
                  population: <span></span>
                </p>
                <p>
                  region: <span></span>
                </p>
                <p>
                  capital: <span></span>
                </p>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
};

export default Country;
