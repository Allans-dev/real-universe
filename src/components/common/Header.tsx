import React from 'react';

import './header.style.scss';

const Header: React.FC = () => {
  
  const handleSignUp = () => {};

  const handleLogIn = () => {};

  return (
    <section className="header">
      <a className="home-icon" href="placeholder-home">realuniverse.com</a>
      <div className="header-tabs">
        <a href="placeholder-buy">buy</a>
        <a href="placeholder-rent">rent</a>
        <a href="placeholder-sold">sold</a>
        <a href="placeholder-time-share">time share</a>
        <a href="placeholder-invest">invest</a>
        <button onClick={handleSignUp}>Sign Up</button>
        <button onClick={handleLogIn}>Log In</button>
      </div>
    </section>
  );
}

export default Header;