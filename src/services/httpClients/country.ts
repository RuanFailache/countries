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
}

export default countryHttpClient
