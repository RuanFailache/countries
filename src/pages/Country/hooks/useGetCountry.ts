import { useEffect, useMemo, useState } from 'react'
import Country from '../../../interfaces/country'
import countryHttpClient from '../../../services/httpClients/country'
import formatNumber2Comma from '../../../utils/formatNumber2Comma'

export default function useGetCountryByName(name?: string) {
  const [loading, setLoading] = useState(false)
  const [country, setCountry] = useState<Country>()

  const countryCells = useMemo(() => {
    if (!country) return []
    return [
      {
        title: 'Native Name',
        subtitle: country.nativeName,
      },
      {
        title: 'Population',
        subtitle: formatNumber2Comma(country.population),
      },
      {
        title: 'Region',
        subtitle: country.region,
      },
      {
        title: 'Sub Region',
        subtitle: country.subregion,
      },
      {
        title: 'Capital',
        subtitle: country.capital,
      },
      {
        title: 'Top Level Domain',
        subtitle: country.topLevelDomain.join(', '),
      },
      {
        title: 'Currencies',
        subtitle: country.currencies.map((curr) => curr.name).join(', '),
      },
      {
        title: 'Languages',
        subtitle: country.languages.map((lan) => lan.name).join(', '),
      },
    ]
  }, [country])

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

  return {
    country,
    loading,
    countryCells,
  }
}
