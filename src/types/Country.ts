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
  // currencies
  // demonyms
  fifa: string
  flag: string
  flags: Flag
  // gini
  // idd
  independent: boolean
  landlocked: false
  // languages
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
  nativeName: {
    official: string
  }
}

interface Flag {
  alt: string,
  png: string,
  svg: string
}
