import { getUrl } from '../selectors/selectors';

import reducer from './restfulReducers';
import { setUrl } from '../actions/restfulActions';

describe('resty reducer', () => {
  it('handles get url action', () => {
    const state = { url: '' };
    const newUrl = setUrl('http://www.awesomeapi.com');

    const newUrlState = reducer(state, newUrl);

    expect(newUrlState).toEqual({
      url: 'http://www.awesomeapi.com'
    });
  });

});
