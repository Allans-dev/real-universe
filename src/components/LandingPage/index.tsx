import * as React from 'react';

import SearchBar from '../SearchBar';
import ResultsPage from '../ResultsPage';

import './landing-page.style.scss';

class LandingPage extends React.Component<{}> {
  render(){
    return (
      <section className="landing-page">

        <h1>Find your place among the stars</h1>
    
        <SearchBar/>
        <ResultsPage resultVis={true}/>  
    
      </section>
    );
  }
  
};
export default LandingPage;