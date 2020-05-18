import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import { RestyProvider } from '../../hooks/Provider';

describe('Form component', () => {

  const url = 'http://www.randomapi.com/';

  it('renders Form', () => {
    const wrapper = shallow(
      <RestyProvider>
        <Form />
      </RestyProvider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
