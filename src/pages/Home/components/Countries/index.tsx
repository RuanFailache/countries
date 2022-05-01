import { FunctionComponent } from 'react'
import usePagination from '../../../../hooks/usePagination'
import Country from '../../../../interfaces/country'
import CountryCard from './components/CountryCard'
import * as StyledComponent from './styles'

interface CountriesProps {
  countries: Country[]
}

const Countries: FunctionComponent<CountriesProps> = function ({ countries }) {
  const {
    data: paginatedCountries,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
  } = usePagination(countries)

  return (
    <>
      <StyledComponent.CountryList>
        {paginatedCountries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
      </StyledComponent.CountryList>

      <button type="button" onClick={goToPrevPage}>
        Prev
      </button>

      <p>
        {currentPage + 1} of {totalPages}
      </p>

      <button type="button" onClick={goToNextPage}>
        Next
      </button>
    </>
  )
}

export default Countries
