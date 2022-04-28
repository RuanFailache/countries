import { useEffect } from 'react'
import usePagination from '../../hooks/usePagination'
import countryHttpClient from '../../services/httpClients/country'
import CountryCard from './components/CountryCard'
import { CountryContainer, CountryList } from './styles'

export default function Home() {
  const { runRequest, states } = countryHttpClient.getCountries()
  const { loading, data } = states

  const { data: countries, goToNextPage, goToPrevPage } = usePagination(data)

  useEffect(() => {
    runRequest()
  }, [])

  if (loading || !countries) return null

  return (
    <CountryContainer>
      <CountryList>
        {countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </CountryList>

      <button type="button" onClick={goToNextPage}>
        Next
      </button>

      <button type="button" onClick={goToPrevPage}>
        Prev
      </button>
    </CountryContainer>
  )
}
