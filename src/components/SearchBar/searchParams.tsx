import * as React from 'react';


// type searchProps = {
//   distance: number,
//   radius: number,
//   surfaceArea: number,
//   volume: number,
//   mass: number,
//   gravityParameter: number,
//   density: number,
//   gravity: number,
//   escapeVelocity: number,
//   rotationPeriod: number,
//   orbitalPeriod: number,
//   orbitalSpeed: number,
//   inclination: number,
//   axialTilt: number,
//   surfaceTemperature: number,
//   airTemperature: number,
//   airContent: string,
//   numberOfMoons: number,
//   rings: string
// }

type ParamsProps = {
  searchType: string
}

export default class SearchParams extends React.Component<ParamsProps> {
  componentDidMount() {
    // console.log(typeof(this.props.searchType));
  }

  render(){
    const { searchType } = this.props;
    return (
      <div>{searchType}</div>
    );
  }
  
}