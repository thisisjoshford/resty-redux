import React from 'react';
import { shallow } from 'enzyme';
import HistoryList from './HistoryList';
import { RestyProvider } from '../../hooks/Provider';

describe('History list component', () => {
  it('renders History list', () => {

    const wrapper = shallow(
      <RestyProvider>
        <HistoryList/>
      </RestyProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
