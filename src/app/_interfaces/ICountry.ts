export interface ICountry {
  name: {
    common: string,
    nativeName: {
      cat: {
        official: string
      }
    }
  },
  flags: {
    svg: string,
    alt: string
  },
  population: number,
  region: string,
  subregion: string,
  capital: string[],
  tld: string[],
  currencies: any,
  languages: any

}
