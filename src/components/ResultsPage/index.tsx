import * as React from 'react';

import data from '../../assets/planetData.json';
import './results-page.style.scss';

interface resultsProps {
  resultsVis: boolean,
  searchState: string,
  planet: any,
  params: string[],
  paramsKey: any,
  units: string[],
}

const ResultsPage: React.FC <resultsProps> = (props) => {
  const { resultsVis, planet, params, paramsKey, units } = props;
  const resultsPageStyles = (() => resultsVis ? 'results-page' : 'no-results-page')();

  interface Idata{
    [key: string]: any,
  }

  const planetsDisplay = ((data: Idata) => {
    return paramsKey.map((item: string, index: number) => {     
      console.log(params[index], ' : ', data[planet][item]);
      return <div key={item}>
          {params[index]}: {data[planet][item]} {units[index]}
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

export default ResultsPage;