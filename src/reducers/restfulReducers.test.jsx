import reducer from './restfulReducers';
import { setUrl, setMethod } from '../actions/restfulActions';

describe('resty reducer', () => {
  const state = {};

  it('handles set url action', () => {
    const newUrl = setUrl('http://www.awesomeapi.com');
    const newUrlState = reducer(state, newUrl);

    expect(newUrlState).toEqual({
      url: 'http://www.awesomeapi.com'
    });
  });

  it('handles set method action', () => {
    const newMethod = setMethod('PUT');
    const newMethodState = reducer(state, newMethod);

    expect(newMethodState).toEqual({
      method: 'PUT'
    });
  });
});
