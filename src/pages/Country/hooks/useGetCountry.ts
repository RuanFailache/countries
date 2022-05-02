import { useEffect, useState } from 'react'
import Country from '../../../interfaces/country'
import countryHttpClient from '../../../services/httpClients/country'

export default function useGetCountryByName(name?: string) {
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState<Country>()
  const [borderCountries, setBorderCountries] = useState<Country[]>([])

  const getBorderCountries = async () => {
    try {
      if (!country) {
        throw new Error('Empty Country body')
      }
      const response = await countryHttpClient.getCountriesByCode(
        country.borders,
      )
      setBorderCountries(response)
    } catch (err) {
      console.log(err)
    }
  }

  const fetchCountryByName = async (countryName?: string) => {
    setLoading(false)
    try {
      if (!countryName) throw new Error('Invalid Country Name')
      const response = await countryHttpClient.getCountryByName(countryName)
      if (response.length === 0) throw new Error('Invalid Country Name')
      setCountry(response[0])
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchCountryByName(name)
  }, [name])

  useEffect(() => {
    getBorderCountries()
  }, [country])

  return {
    country,
    loading,
    borderCountries,
  }
}
