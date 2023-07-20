export interface Country {
  altSpellings: string[],
  area: number,
  borders: string[],
  capital: string[],
  // capitalInfo:
  // car
  cca2: string,
  cca3: string,
  ccn3: string,
  cioc: string,
  // coatOfArms
  continents: string[]
  currencies: Currency[]
  // demonyms
  fifa: string
  flag: string
  flags: Flag
  // gini
  // idd
  independent: boolean
  landlocked: false
  languages: {code: string}[]
  // latlng
  // maps
  name: Name
  population: number
  // postalCode
  region: string
  startOfWeek: string
  status: string
  subregion: string
  timezones: string[]
  tld: string[]
  // translations
  // unMember
}

interface Name {
  common: string,
  official: string,
  nativeName: {
    official: string,
    common: string
  }
}

interface Flag {
  alt: string,
  png: string,
  svg: string
}

interface Currency {
  name: string,
  symbol: string
}
