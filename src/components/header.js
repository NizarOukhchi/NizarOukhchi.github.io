import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header className="flex items-center p-10 z-10">
    <div>
      <a className="text-white text-xl font-bold text-shadow">Nizar Oukhchi</a>
    </div>
    <nav className="ml-auto">
      <ul className="list-reset hidden lg:flex">
        <li className="px-4">
          <a className="text-white text-md uppercase font-bold text-shadow">About me</a>
        </li>
        <li className="px-4">
          <a className="text-white text-md uppercase font-bold text-shadow">
            Get in touch
          </a>
        </li>
        <li className="px-4">
          <a
            className="text-white text-md uppercase font-bold"
            target="_blank"
            href="https://medium.com/@nizar.oukhchi"
          >
            blog
          </a>
        </li>
        <li />
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
