import React from 'react';
import { shallow } from 'enzyme';
import Response from './Response';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Response component', () => {
  it('renders the response component', () => {

    const wrapper = shallow(
      <Provider store={store}>
        <Response />
      </Provider>
      
    );
    expect(wrapper).toMatchSnapshot();
  });
});
