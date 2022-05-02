import { FunctionComponent, useMemo } from 'react'
import TitledCell from '../../../../components/TitledCell'
import Country from '../../../../interfaces/country'
import formatNumber2Comma from '../../../../utils/formatNumber2Comma'
import * as StyledComponents from './styles'

interface CountryInfoProps {
  country: Country
  borderCountries: Country[]
}

const CountryInfo: FunctionComponent<CountryInfoProps> = function ({
  country,
  borderCountries,
}) {
  const countryCells = useMemo(() => {
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

  return (
    <StyledComponents.CountryInfoContainer>
      <StyledComponents.CountryInfoFlag
        src={country.flag}
        alt={`flag of ${country.name}`}
      />
      <section>
        <StyledComponents.CountryInfoTitle>
          {country.name}
        </StyledComponents.CountryInfoTitle>
        <StyledComponents.CountryInfoList>
          {countryCells.map((cell, index) => (
            <StyledComponents.CountryInfoItem
              key={cell.title}
              gridArea={`cell-${index}`}
            >
              <TitledCell title={cell.title} subtitle={cell.subtitle} />
            </StyledComponents.CountryInfoItem>
          ))}
        </StyledComponents.CountryInfoList>
        <StyledComponents.BorderCountriesContainer>
          <strong>Border Countries:</strong>
          <StyledComponents.BorderCountriesList>
            {borderCountries.map((borderCountry) => (
              <StyledComponents.BorderCountriesItem key={borderCountry.name}>
                {borderCountry.name}
              </StyledComponents.BorderCountriesItem>
            ))}
          </StyledComponents.BorderCountriesList>
        </StyledComponents.BorderCountriesContainer>
      </section>
    </StyledComponents.CountryInfoContainer>
  )
}

export default CountryInfo
