import * as React from 'react';

import './search-bar.style.scss';

type searchState = {
  value: string,
  searchType: string
}

const buy: string = 'buy';
const rent: string = 'rent';
const sold: string = 'sold';
const timeShare: string = 'time share';
const invest: string = 'invest';

const searchTypeArr: string[] = [buy, rent, sold, timeShare, invest];

export default class SearchBar extends React.Component<{}, searchState> {
  constructor(props: {}){
    super(props);

    this.state = {
      value: '',
      searchType: buy
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) : void => {
    e.preventDefault();
  }

  handleTabClick = (e: React.ChangeEvent<HTMLInputElement>) : void => {

  }

  handleLabelClass = (state: string) => {
    switch(state) {
      case 'buy':
        return 'search__buy';
      case 'rent':
        return 'search__rent';
      case 'sold':
        return 'search__sold';
      case 'time share':
        return 'search__time-share';
      case 'invest':
        return 'search__invest';
      default:
       return 'search__buy';
    }
  }

  displayLabels = () => {
    return searchTypeArr.map((item, index, arr)=> {
      return <label className={this.handleLabelClass(this.state.searchType)} htmlFor="search__bar">
        {item}
      </label>
    });
  };

  render() {
    return (
      <section className="search">
        <form className="search__form">
          <div className="search__labels">
            {this.displayLabels()}
          </div>
          <input 
            id="search__bar"
            className="search__bar"
            onChange={this.handleChange} 
            placeholder="Find your planet" 
            value={this.state.value}
          />
          <input 
            className="search__btn"
            type="submit" 
            value="Search"
          />
        </form>
      </section>
    );
  }
}