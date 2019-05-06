import React from 'react';

import './header.style.scss';

const Header: React.FC = () => {
  
  const handleSignUp = () => {};

  const handleLogIn = () => {};

  return (
    <section>
      <a href="placeholder-home">realuniverse.com</a>
      <div>
        <a href="placeholder-buy">buy</a>
        <a href="placeholder-rent">rent</a>
        <a href="placeholder-sold">sold</a>
        <a href="placeholder-invest">invest</a>
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogIn}>Log In</button>
    </section>
  );
}

export default Header;