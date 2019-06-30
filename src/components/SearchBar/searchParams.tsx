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
  searchType: string,
  params: string[],
}

const paramsStyle = {
  fontSize: '0.8em',
  paddingTop: '1em'
};

const SearchParams: React.FC<ParamsProps> = (props) => {

  const { params } = props;

  const displayParams = params.map((item, index) => {
    return (` ${item} |`)
  })

  return (
    <section style={paramsStyle }>
      Displays: {displayParams}
    </section>
  );


  
}

export default SearchParams; 