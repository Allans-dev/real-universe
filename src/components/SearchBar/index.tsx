import * as React from 'react';

import './search-bar.style.scss';

type searchState = {
  value: string,
  searchType: string,
  tabClassName: string
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
      searchType: buy,
      tabClassName: ''
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({value: e.target.value});
  }

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  handleTabClick = (searchState: string, item: string) => {
    this.setState({ searchType: item });
    this.setState({ tabClassName: 'active' })
  }

  displayLabels = () => {
    return searchTypeArr.map((item, index, arr)=> {
      return <label 
        key={index}
        className={item === this.state.searchType ? this.state.tabClassName : ''}
        htmlFor="search__bar"
        onClick={this.handleTabClick.bind(this, this.state.searchType, item)}
      >
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