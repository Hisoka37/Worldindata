import { useDispatch, useSelector } from 'react-redux';
import './search.css';
import { setSearchTerm } from '../../../Redux/countries/countriesSlice';

const Search = () => {
  const { searchTerm } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const handleInputValue = (e) => {
    dispatch(setSearchTerm(e.target.value.toLowerCase()));
  };
  return (
    <section className="search-container">
      <div className="search-icon">
        <i className="fa fa-search" />
      </div>

      <input
        type="text"
        placeholder="Search for a country"
        className="search-input"
        value={searchTerm}
        onChange={handleInputValue}
      />
    </section>
  );
};

export default Search;
