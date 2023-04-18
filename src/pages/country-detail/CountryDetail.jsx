import { useEffect } from "react";
import { searchByCode } from "../../Redux/countries/countriesAction";
import "./country-detail.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../Redux/countries/countriesSlice";

const CountryDetail = () => {
  const {loading, error, countrySearched} = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();
  const { code } = useParams();
  useEffect (() => {
    if (code) {
      dispatch(searchByCode(code.toLowerCase()));
    } 
    if (error) {
      console.log(error);
    }
  }, [dispatch, code, error])
  return (
    <section className="country-detail-container">
      <Link className="back-button" to="/">
        <i className="	fa fa-arrow-left"></i> Back
      </Link>

      <div className="country-detail-content">
        {countrySearched.length > 0 ? (
          <>
          <img src={countrySearched[0].flags.png} alt="name" className="country-detail-image" />

          <div className="country-detail-right">
            <h1>{countrySearched[0].name.common}</h1>
            <div className="details">
              <div className="detail-left">
                <p>
                  Offcial Name: <span>{countrySearched[0].name.official}</span>
                </p>
                <p>
                  Population: <span>{countrySearched[0].population}</span>
                </p>
                <p>
                  Region: <span>{countrySearched[0].region}</span>
                </p>

                <p>
                  Sub Region: <span>{countrySearched[0].subregion}</span>
                </p>
                <p>
                  Capital: <span>{countrySearched[0].capital}</span>
                </p>
              </div>

              <div className="detail-right">
                <p>
                  Top Level Domain: <span>{countrySearched[0].tld[0]}</span>
                </p>
                <p>
                  Currencies:
                  <span>
                    {Object.values(countrySearched[0].currencies)
                    .map((item) => {
                      return item.name;
                    })
                    .join(",")}
                  </span>
                </p>

                <p>
                  Languages:
                  <span>
                  {Object.values(countrySearched[0].languages)
                    .map((item) => {
                      return item;
                    })
                    .join(",")}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
        ) : (
          <div>No data Found</div>
        )}
        
      </div>
    </section>
  );
};

export default CountryDetail;
