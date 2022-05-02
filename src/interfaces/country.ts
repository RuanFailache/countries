export default interface Country {
  flag: string
  name: string
  region: string
  capital: string
  borders: string[]
  subregion: string
  population: number
  nativeName: string
  topLevelDomain: string[]
  languages: { name: string }[]
  currencies: { name: string }[]
}
