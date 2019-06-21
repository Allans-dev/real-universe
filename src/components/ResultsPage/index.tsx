import * as React from 'react';

import './results-page.style.scss';

class ResultsPage extends React.Component<{ resultVis: boolean }> {

  render() {
    console.log(this.props);
    const { resultVis } = this.props;
    const resultsPageStyles = (() => resultVis ? 'results-page' : 'no-results-page')();
    return (
    <section className={resultsPageStyles}>

    </section>
  );
  }
  
}

export default ResultsPage;