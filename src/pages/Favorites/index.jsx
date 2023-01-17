import React, { Component } from 'react';
import Search from '../Search';
/* import Header from '../components/Header'; */
/* import Search from './Search'; */

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Search />
        Favorites
      </div>
    );
  }
}
