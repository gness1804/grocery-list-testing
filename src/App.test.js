import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import fakeGroceries from './fake-groceries';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// it('should show the correct number of groceries on the page', () => {
//     const wrapper = mount(<App />);
//     wrapper.find('.name-input')
// });
