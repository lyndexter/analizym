import React from 'react';
import renderer from 'react-test-renderer';

import html-to-css-autocompletion from '..\src\component\html-to-css-autocompletion.js';

describe('<html-to-css-autocompletion />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<html-to-css-autocompletion />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });