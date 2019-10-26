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
  hide: any,
}

const ResultsPage: React.FC <resultsProps> = (props) => {
  const { resultsVis, planet, params, paramsKey, units, hide } = props;
  const resultsPageStyles = (() => resultsVis ? 'results-page' : 'no-results-page')();

  interface Idata{
    [key: string]: any,
  }

  const planetsDisplay = ((data: Idata) => {
    return paramsKey.map((item: string, index: number) => {     
      return <div key={item}>
          {params[index]}: {data[planet][item]} {units[index]}
        </div>;
    })
  })(data);

  return (
  <article id='results-page' className={resultsPageStyles}>
    <h2>{planet}</h2>
    <button onClick={hide}>x</button>
    <div>{planetsDisplay}</div>
  </article>
);
  
}

export default ResultsPage;