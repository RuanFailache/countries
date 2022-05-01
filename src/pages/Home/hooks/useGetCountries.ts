import { useEffect, useState } from 'react'
import Country from '../../../interfaces/country'
import countryHttpClient from '../../../services/httpClients/country'

const useGetCountries = function () {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCountries = async (callback: (response: Country[]) => void) => {
    setLoading(true)
    try {
      const response = await countryHttpClient.getCountries()
      callback(response)
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  const getAllCountries = async () => {
    fetchCountries((response) => {
      setCountries(response)
    })
  }

  const getCountriesByName = async (name: string) => {
    fetchCountries((response) => {
      setCountries(
        response.filter((country) => {
          return country.name.includes(name)
        }),
      )
    })
  }

  const getCountriesByRegion = async (region: string) => {
    fetchCountries((response) => {
      setCountries(
        response.filter((country) => {
          return country.region === region
        }),
      )
    })
  }

  useEffect(() => {
    getAllCountries()
  }, [])

  return {
    countries,
    loading,
    getAllCountries,
    getCountriesByName,
    getCountriesByRegion,
  }
}

export default useGetCountries
