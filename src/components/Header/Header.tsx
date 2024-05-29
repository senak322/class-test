import React, { Component } from "react";
import { connect } from 'react-redux';
import Watch from "../Watch/Watch";
import { RootState, AppDispatch } from '../../store/index';

interface HeaderProps {
  language: "ru" | "en";
  setLanguage: (language: "ru" | "en") => void;
}

class Header extends Component<HeaderProps> {
  handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.setLanguage(event.target.value as "ru" | "en");
  };

  render() {
    return (
      <header>
        <img src="your-image-url" alt="Logo" />
        <select
          value={this.props.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
        <Watch />
      </header>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  language: state.language.language,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setLanguage: (language: "ru" | "en") => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
