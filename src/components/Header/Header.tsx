import React, { Component } from 'react';
import Watch from '../Watch/Watch';

class Header extends Component {
  render() {
    return (
      <header>
        <img src="your-image-url" alt="Logo" />
        <select>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
        <Watch />
      </header>
    );
  }
}

export default Header;