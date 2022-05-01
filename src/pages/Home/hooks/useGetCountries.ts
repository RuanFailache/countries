import { useEffect, useState } from 'react'
import Country from '../../../interfaces/country'
import countryHttpClient from '../../../services/httpClients/country'

const useGetCountries = function () {
  const [loading, setLoading] = useState(false)
  const [countries, setCountries] = useState<Country[]>([])
  const [regions, setRegions] = useState<string[]>([])
  const [filterStates, setFilterStates] = useState({
    name: '',
    region: '',
  })

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

  const loadAllCountriesAndBuildRegions = async () => {
    fetchCountries((response) => {
      setCountries(response)
      setRegions(
        response
          .map((country) => country.region)
          .filter((region, index, self) => self.indexOf(region) === index),
      )
    })
  }

  const filterCountries = (
    filterType: 'name' | 'region',
    valueToBeFiltered: string,
  ) => {
    setFilterStates({ ...filterStates, [filterType]: valueToBeFiltered })
    fetchCountries((response) => {
      setCountries(
        response.filter((country) => {
          const filters = {
            name:
              country.name.includes(valueToBeFiltered) &&
              country.region === filterStates.region,
            region:
              country.name.includes(filterStates.name) &&
              country.region === valueToBeFiltered,
          }
          return filters[filterType]
        }),
      )
    })
  }

  useEffect(() => {
    loadAllCountriesAndBuildRegions()
  }, [])

  return {
    regions,
    loading,
    countries,
    getAllCountries,
    filterCountries,
  }
}

export default useGetCountries
