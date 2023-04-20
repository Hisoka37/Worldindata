import { useEffect } from 'react';
import './country.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  displayAllcountries,
  searchByRegion,
} from '../../Redux/countries/countriesAction';

const Country = () => {
  const {
    countriesData, success, loading, error, region, searchTerm,
  } = useSelector((store) => store.country);
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

  const data = countriesData.filter((item) => item.name.common.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading .....</h1>
      ) : (
        data.map((item) => (
          <Link className="country-card" key={item.id} to={`/${item.cioc}`}>
            <img
              src={item.flags.png}
              alt={item.flags.alt}
              className="country-image"
            />
            <div className="country-content">
              <div className="countryheader">
                <h3>{item.name.common}</h3>
                <i className="fa fa-arrow-circle-o-right" />
              </div>
              <p>
                Population:
                {' '}
                <span>{item.population}</span>
              </p>
            </div>
          </Link>
        ))
      )}
    </section>
  );
};

export default Country;
