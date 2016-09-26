import MyComponent from './MyComponent.jsx'
import {render}  from 'react-dom'
import React from 'react' 

Meteor.startup(() => {
  render(<MyComponent />, document.getElementById('root'));
}); 