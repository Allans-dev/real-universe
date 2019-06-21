import * as React from 'react';
import Select from 'react-select';

import SearchParams from './searchParams';
import { planetNames } from './searchUtils';
import planets from '../../assets/planetData.json';

import './search-bar.style.scss';

export interface searchState {
  value: string,
  searchType: string,
  tabClassName: string,
  data: object,
  selectedOption: any
}

const options = planetNames(planets).map((item) => {
  return {value: item, label: item}
});

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
      tabClassName: '',
      data: planets,
      selectedOption: null
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const names = planetNames(planets);
    console.log(names)
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
  }

  handleTabClick = (searchState: string, item: string) => {
    this.setState({ searchType: item });
    this.setState({ tabClassName: 'active' })
  }

  displayLabels = () => {
    const { searchType, tabClassName } = this.state;
    return searchTypeArr.map((item, index, arr)=> {
      return <label 
        key={index}
        className={item === searchType ? tabClassName : ''}
        htmlFor="search__bar"
        onClick={this.handleTabClick.bind(this, searchType, item)}
      >
        {item}
      </label>
    });
  };

  render() {
    const { selectedOption, searchType } = this.state;
    return (
      <section className="search">
        <form className="search__form">
          <div className="search__labels">
            {this.displayLabels()}
          </div>
          <Select
            id="search__bar"
            className="search__bar"
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
            placeholder="find your planet..."
          />
          <input 
            className="search__btn"
            type="submit" 
            value="Search"
          />
        </form>
        <SearchParams searchType={searchType}/>
      </section>
    );
  }
}