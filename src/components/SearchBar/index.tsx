import * as React from 'react';

import './search-bar.style.scss';

type searchState = {
  value: string;
}

export default class SearchBar extends React.Component<{}, searchState> {
  constructor(props: {}){
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) : void => {
    e.preventDefault();
  }

  render() {
    return (
      <section className="search">
        <form className="search__form">
          <label>Search</label>
          <input 
            className="search__bar"
            onChange={this.handleChange} 
            placeholder="Find your planet" 
            value={this.state.value}>
          </input>
        </form>
      </section>
    );
  }
}