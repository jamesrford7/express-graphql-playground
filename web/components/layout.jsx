import React from 'react';

import Airlines from './airlines.jsx';
import Flights from './flights.jsx';

export default class Layout extends React.Component {
  render() {
    return <div><Airlines /><Flights /></div>
  }
};
