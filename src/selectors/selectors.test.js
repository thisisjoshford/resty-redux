import { getUrl } from './selectors';

const state = {
  url: 'http://www.usefulapi.com',
};

describe('state selectors', () => {
  it('gets URL from state', () => {
    const url = getUrl(state);
    expect(url).toEqual(state.url);
  });
});
