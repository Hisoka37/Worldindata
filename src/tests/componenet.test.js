import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';
import Filter from '../components/input/filter/Filter';
import Search from '../components/input/search/Search';
import Country from '../components/country/Country';

afterEach(cleanup);
describe('tests for components', () => {
  test('Snapshot test for filter', () => {
    const countryfilter = render(<Provider store={store}><Filter /></Provider>);
    expect(countryfilter).toMatchSnapshot();
  });
  test('Snapshot test for Country', () => {
    const countryDipslayed = render(<Provider store={store}><Country /></Provider>);
    expect(countryDipslayed).toMatchSnapshot();
  });
  test('Snapshot test for Search', () => {
    const countrySearched = render(<Provider store={store}><Search /></Provider>);
    expect(countrySearched).toMatchSnapshot();
  });
});
