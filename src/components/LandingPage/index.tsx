import * as React from 'react';

import SearchBar from '../SearchBar';

import './landing-page.style.scss';

const LandingPage: React.FC = () => 

<section className="landing-page">

  <h1>Find your place among the stars</h1>
  <SearchBar/>
</section>;

export default LandingPage;