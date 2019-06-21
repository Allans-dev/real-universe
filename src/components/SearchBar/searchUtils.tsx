export function api(url: string) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.text();
    });
}

export function planetNames(data: object) {
  var planetNames: string[];
  if (!data) {
    planetNames = ["No data found, please try again"]
  } else {
    planetNames = ((data: object) => {
      let arr: string[] = [];
      let name: string = 'Earth';
      for (name in data) {
        if (!name || !data) {
          throw Error ('No names found');
        }
        arr.push(name);
      }
      return arr;
    })(data);
    if (!planetNames) {
      throw Error('No planet names found, please try again')
    } 
  }
  return planetNames.filter((item, index) => index > 1 ? item : null);
};

