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
  let arr = [];
  for (let name of Object.keys(data)) {
    arr.push(name);
  }
  return arr.filter((item, index) => index > 1 ? item : null);
};

export function planetAttrList(data: any) {
  let arr = [];
  for (let atr of Object.entries(data.Attributes)) {
    arr.push(atr[1]);
  }
  return arr;
}

export function planetUnitsList(data: any) {
  let arr = [];
  for (let units of Object.entries(data.Units)) {
    arr.push(units[1]);
  }
  return arr;
}
