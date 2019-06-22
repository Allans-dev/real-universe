import * as React from 'react';

import SearchBar from '../SearchBar';
import ResultsPage from '../ResultsPage';
// import { resultVis } from '../SearchBar/searchUtils';


import './landing-page.style.scss';

interface landingState{
  resultVis: boolean
}

class LandingPage extends React.Component<{}, landingState> {
  constructor(props: any) {
    super(props);
    this.hideResults = this.hideResults.bind(this);
    this.showResults = this.showResults.bind(this);
  }

  state = { resultVis: false }

  componentDidMount(){
    console.log(this.state.resultVis)
  }

  showResults(bool: boolean) {
    this.setState({ resultVis: true });
  }

  hideResults(bool: boolean) {
    this.setState({ resultVis: false });
  }

  render(){
    const { resultVis } = this.state;
    return (
      <section className="landing-page">

        <h1>Find your place among the stars</h1>
    
        <SearchBar hide={this.hideResults} show={this.showResults}/>
        <ResultsPage resultsProps={resultVis}/>  
    
      </section>
    );
  }
  
};
export default LandingPage;