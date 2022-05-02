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

  const getAllCountriesAndBuildRegions = async () => {
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
            name: !filterStates.region
              ? country.name
                  .toLowerCase()
                  .includes(valueToBeFiltered.toLowerCase())
              : country.name
                  .toLowerCase()
                  .includes(valueToBeFiltered.toLowerCase()) &&
                country.region === filterStates.region,
            region:
              country.name
                .toLowerCase()
                .includes(filterStates.name.toLowerCase()) &&
              country.region === valueToBeFiltered,
          }
          return filters[filterType]
        }),
      )
    })
  }

  useEffect(() => {
    getAllCountriesAndBuildRegions()
  }, [])

  return {
    regions,
    loading,
    countries,
    filterCountries,
  }
}

export default useGetCountries
