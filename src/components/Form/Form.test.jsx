import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { Provider } from 'react-redux';
import store from '../../store.js';

describe('Form component', () => {

  it('renders Form', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Form />
      </Provider> 
    );
    expect(wrapper).toMatchSnapshot();
  });
});
