import Country from '../../interfaces/country'
import useHttpClient from '../api'

const countryHttpClient = {
  getCountries: () => {
    return useHttpClient<Country[]>({
      url: '/all',
      method: 'get',
    })
  },
  getCountryByName: (name: string) => {
    return useHttpClient<Country[]>({
      url: `/name/${name}`,
      method: 'get',
    })
  },
  getCountriesByCode: (codes: string[]) => {
    return useHttpClient<Country[]>({
      url: `/alpha?codes=${codes.join(',')}`,
    })
  },
}

export default countryHttpClient
