import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';
import { Provider } from 'react-redux';
import store from '../../store';

describe('History list component', () => {
  it('renders History list', () => {

    const wrapper = shallow(
      <Provider store={store}>
        <HistoryList/>
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
