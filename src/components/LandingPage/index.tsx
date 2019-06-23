import * as React from 'react';

import SearchBar from '../SearchBar';
import ResultsPage from '../ResultsPage';

import './landing-page.style.scss';

interface landingState {
  resultVis: boolean,
  searchState: string,
  params: string[],
}

class LandingPage extends React.Component<{}, landingState> {
  constructor(props: any) {
    super(props);
    this.hideResults = this.hideResults.bind(this);
    this.showResults = this.showResults.bind(this);
    this.changeSearchState = this.changeSearchState.bind(this);
    this.changeSearchParams = this.changeSearchParams.bind(this);
  }

  state = { 
    resultVis: false,
    searchState: 'buy',
    params: ['Mean distance from the Sun', 'Equatorial radius', 'Surface area', 'Volume'],
  }

  showResults(bool: boolean) {
    this.setState({ resultVis: true });
  }

  hideResults(bool: boolean) {
    this.setState({ resultVis: false });
  }

  changeSearchState(val: string) {
    this.setState({ searchState: val });
  }

  changeSearchParams(val: string){
    const buy: string = 'buy';
    const rent: string = 'rent';
    const sold: string = 'sold';
    const timeShare: string = 'time share';
    const invest: string = 'invest';

    switch(val) {
      case buy: 
        this.setState({ params: ['Mean distance from the Sun', 'Equatorial radius', 'Surface area', 'Volume'] });
        break;
      case rent:
        this.setState({ params: ['Mass', 'Gravitational parameter', 'Density', 'Equatorial gravity'] });
        break;
      case sold:
        this.setState({ params: ['Escape velocity', 'Rotation period', 'Orbital period', 'Mean orbital speed'] });
        break;
      case timeShare:
        this.setState({ params: ['Inclination', 'Axial tilt', 'Mean surface temperature', 'Mean air temperature'] });
        break;
      case invest:
        this.setState({ params: ['Atmospheric composition', 'Number of known moons', 'Rings'] });
        break;
      default: 
        this.setState({ params: ['Mean distance from the Sun', 'Equatorial radius', 'Surface area', 'Volume'] });
        break;
    }
  }

  render(){
    const { resultVis, searchState, params } = this.state;
    return (
      <section className="landing-page">

        <h1>Find your place among the stars</h1>
    
        <SearchBar 
          hide={this.hideResults} 
          show={this.showResults} 
          changeSearchState={this.changeSearchState} 
          changeParams={this.changeSearchParams}
          params={params}
        />
        <ResultsPage 
          resultsProps={resultVis} 
          searchState={searchState} 
        />  
    
      </section>
    );
  }
  
};
export default LandingPage;