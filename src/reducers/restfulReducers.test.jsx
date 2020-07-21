import reducer from './restfulReducers';
import { setUrl, setMethod, setTextBody, addHistory, addResponse } from '../actions/restfulActions';

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

  it('handles set text body action', () => {
    const newTextBody = setTextBody('This is the text body');
    const newTextBodyState = reducer(state, newTextBody);

    expect(newTextBodyState).toEqual({
      textBody: 'This is the text body'
    });
  });

  it('adds a new fetch to the history', () => {
    const state = {
      history: [
        {
          url: 'http://www.apiFetch1.com',
          method: 'GET'
        }
      ]
    };

    const newFetch = {
      url: 'http://www.apiFetch2.com',
      method: 'PUT'
    };

    const newHistoryItem = addHistory(newFetch);
    const newHistoryState = reducer(state, newHistoryItem);
    
    expect(newHistoryState).toEqual({
      history: [
        {
          url: 'http://www.apiFetch1.com',
          method: 'GET'
        },
        {
          url: 'http://www.apiFetch2.com',
          method: 'PUT'
        }
      ]
    });
  });

  it('handles adding response action', () => {
    const res = {
      name: 'josh',
      class: 'human'
    };
    const newResponse = addResponse(res);
    const newResponseState = reducer(state, newResponse);

    expect(newResponseState).toEqual({
      response: {
        name: 'josh',
        class: 'human'
      }
    });
  });

});
