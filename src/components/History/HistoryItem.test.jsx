import React from 'react';
import { shallow } from 'enzyme';
import HistoryItem from './HistoryItem';
import { RestyProvider } from '../../hooks/Provider';

describe('History Item component', () => {
  it('renders History Item', () => {
    const wrapper = shallow(
      <RestyProvider>
        <HistoryItem />
      </RestyProvider>);
    expect(wrapper).toMatchSnapshot();
  });
});
