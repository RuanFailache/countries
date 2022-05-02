export default interface Country {
  flag: string
  name: string
  region: string
  capital: string
  subregion: string
  population: number
  nativeName: string
  currencies: { name: string }[]
  topLevelDomain: string[]
  languages: { name: string }[]
}
