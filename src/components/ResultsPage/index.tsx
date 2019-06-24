import * as React from 'react';

import data from '../../assets/planetData.json';
import './results-page.style.scss';

interface resultsProps {
  resultsProps: boolean,
  searchState: string,
  planet: any,
  params: string[],
  paramsKey: any,
}

class ResultsPage extends React.Component<resultsProps, any> {
  render() {
    console.log(this.props);
    const { resultsProps, planet, params, paramsKey } = this.props;
    const resultsPageStyles = (() => resultsProps ? 'results-page' : 'no-results-page')();
    interface Idata{
      [key: string]: any,
    }

    const planetsDisplay = ((data: Idata) => {
      return paramsKey.map((item: string, index: number) => {     
        console.log(params[index], ' : ', data[planet][item]);
        return <div key={item}>
            {params[index]}{data[planet][item]}
          </div>;
      })
    })(data);
    
    

    return (
    <section className={resultsPageStyles}>
      {planet}
      {planetsDisplay}
    </section>
  );
  }
  
}

export default ResultsPage;