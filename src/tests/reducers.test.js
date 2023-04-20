import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import  { reset, setRegion, setSearchTerm } from '../Redux/countries/countriesSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('countriesSlice reducers', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      loading: false,
      countriesData: [],
      countrySearched: [],
      error: false,
      searchTerm: '',
      success: false,
      message: '',
    });
  });

  it('should set the search term', () => {
    const searchTerm = 'test';
    const expectedAction = {
      type: 'countries/setSearchTerm',
      payload: searchTerm,
    };

    store.dispatch(setSearchTerm(searchTerm));
    expect(store.getActions()).toEqual([expectedAction]);
  });
  it('should set the region', () => {
    const region = 'Europe';
    const expectedAction = {
      type: 'countries/setRegion',
      payload: region,
    };

    store.dispatch(setRegion(region));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it('should reset the state', () => {
    const expectedAction = {
      type: 'countries/reset',
    };

    store.dispatch(reset());
    expect(store.getActions()).toEqual([expectedAction]);
  });
});

