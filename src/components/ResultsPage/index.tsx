import * as React from 'react';

import './results-page.style.scss';

interface resultsProps {
  resultsProps: boolean
}

class ResultsPage extends React.Component<{ resultsProps: boolean }> {
  render() {
    console.log(this.props);
    const { resultsProps } = this.props;
    const resultsPageStyles = (() => resultsProps ? 'results-page' : 'no-results-page')();
    return (
    <section className={resultsPageStyles}>

    </section>
  );
  }
  
}

export default ResultsPage;