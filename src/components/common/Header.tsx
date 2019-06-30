import React from 'react';

import './header.style.scss';

const Header: React.FC = () => {
  
  return (
    <section className="header">
      <a className="home__icon" href="placeholder-home">realuniverse.com</a>
      <div className="header__tabs">
        <a href="https://en.wikipedia.org/wiki/List_of_gravitationally_rounded_objects_of_the_Solar_System#Planets">link to data source</a>
      </div>
    </section>
  );
}

export default Header;