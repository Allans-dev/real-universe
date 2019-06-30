import * as React from 'react';
import ReactDOM from 'react-dom';
import Select from 'react-select';

import SearchParams from './searchParams';
import { planetNames } from '../common/Utils';
import planets from '../../assets/planetData.json';

import './search-bar.style.scss';

interface searchState {
  value: string,
  searchType: string,
  tabClassName: string,
  data: object,
  selectedOption: any,
}

interface searchProps {
  show: any,
  hide: any,
  changeSearchState: any,
  changeParams: any,
  params: string[],
  setPlanet: any,
}

const options = planetNames(planets).map((item) => {
  return {value: item, label: item};
});

const general: string = 'general';
const mass: string = 'mass';
const orbits: string = 'orbits';
const temp: string = 'temp & tilt';
const extra: string = 'extra';

const searchTypeArr: string[] = [general, mass, orbits, temp, extra];

export default class SearchBar extends React.Component<searchProps, searchState> {
  constructor(props: searchProps){
    super(props);

    this.state = {
      value: '',
      searchType: general,
      tabClassName: '',
      data: planets,
      selectedOption: null
      };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  handleSubmit = async ( e: React.FormEvent<HTMLFormElement> ): Promise<void> => {
    e.preventDefault();
    const { show, changeSearchState, setPlanet } = this.props;
    const { searchType, selectedOption } = this.state;
    changeSearchState(searchType);
    setPlanet(selectedOption)
    show();
  }

  handleTabClick = (searchState: string, item: string) => {
    const { changeSearchState, changeParams } = this.props;
    changeSearchState(item);
    changeParams(item);
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

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClickOutside, false)
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClickOutside, false)
  }

  handleClickOutside = (event: any) => {
    const domNode = ReactDOM.findDOMNode(this);
    const { hide } = this.props;
    if (!domNode || !domNode.contains(event.target)) {
        hide();
        this.setState({ selectedOption: null })
    }
  }

  render() {
    const { selectedOption, searchType } = this.state;
    const { params } = this.props;

    const selectStyles: object = { menu: (styles: object) => ({ ...styles, zIndex: 999, opacity: 1 }) };

    return (
      <section className="search">
        <form className="search__form" onSubmit={this.handleSubmit}>
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
            style={selectStyles}
          />
          <input 
            className="search__btn"
            type="submit" 
            value="Search"
          />
        </form>
        <SearchParams searchType={searchType} params={params}/>
      </section>
    );
  }
}