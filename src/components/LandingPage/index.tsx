import * as React from 'react';

import SearchBar from '../SearchBar';
import ResultsPage from '../ResultsPage';
import { planetAttrList } from '../common/Utils';
import planets from '../../assets/planetData.json';


import './landing-page.style.scss';

interface landingState {
  resultVis: boolean,
  searchState: string,
  params: any,
  planet: string,
  paramsKey: any,
}

class LandingPage extends React.Component<{}, landingState> {
  constructor(props: any) {
    super(props);
    this.hideResults = this.hideResults.bind(this);
    this.showResults = this.showResults.bind(this);
    this.changeSearchState = this.changeSearchState.bind(this);
    this.changeSearchParams = this.changeSearchParams.bind(this);
    this.setPlanet = this.setPlanet.bind(this);
  }

  state = { 
    resultVis: false,
    searchState: 'buy',
    params: ['Mean distance from the Sun', 'Equatorial radius', 'Surface area', 'Volume'],
    planet: 'Earth',
    paramsKey: ['C', 'D', 'E', 'F'],
  }

  setPlanet(val: any){
    this.setState({ planet: val.value });
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
        let buyAttr = planetAttrList(planets).filter((item,index) => index < 4);
        this.setState({ paramsKey: ['C', 'D', 'E', 'F'] })
        this.setState({ params: buyAttr });
        break;
      case rent:
        let rentAttr = planetAttrList(planets).filter((item,index) => index > 3 && index < 8);
        this.setState({ paramsKey: ['G', 'H', 'I', 'J'] })
        this.setState({ params: rentAttr });
        break;
      case sold:
        let soldAttr = planetAttrList(planets).filter((item,index) => index > 7 && index < 12);
        this.setState({ paramsKey: ['K', 'L', 'M', 'N'] })
        this.setState({ params: soldAttr });
        break;
      case timeShare:
        let timeShareAttr = planetAttrList(planets).filter((item,index) => index > 11 && index < 16);
        this.setState({ paramsKey: ['O', 'P', 'Q', 'R'] })
        this.setState({ params: timeShareAttr });
        break;
      case invest:
        let investAttr = planetAttrList(planets).filter((item,index) => index > 15 && index < 19);
        this.setState({ paramsKey: ['S', 'T', 'U'] });
        this.setState({ params: investAttr });
        break;
      default: 
        this.setState({ params: ['Mean distance from the Sun', 'Equatorial radius', 'Surface area', 'Volume'] });
        this.setState({ paramsKey: [0,1,2,3] })
        break;
    }
  }

  render(){
    const { resultVis, searchState, params, paramsKey, planet } = this.state;
    return (
      <section className="landing-page">

        <h1>Find your place among the stars</h1>
    
        <SearchBar 
          hide={this.hideResults} 
          show={this.showResults} 
          changeSearchState={this.changeSearchState} 
          changeParams={this.changeSearchParams}
          params={params}
          setPlanet={this.setPlanet}
        />
        <ResultsPage 
          resultsProps={resultVis} 
          searchState={searchState} 
          planet={planet}
          params={params}
          paramsKey={paramsKey}
        />  
    
      </section>
    );
  }
  
};
export default LandingPage;