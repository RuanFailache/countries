import { FunctionComponent } from 'react'
import TitledCell from '../../../../components/TitledCelll'
import Country from '../../../../interfaces/country'
import {
  CountryCardContainer,
  CountryCardFlag,
  CountryCardInfo,
} from './styles'

interface CountryCardProps {
  country: Country
}

const CountryCard: FunctionComponent<CountryCardProps> = function ({
  country,
}) {
  return (
    <CountryCardContainer>
      <CountryCardFlag src={country.flag} alt={country.name} />

      <CountryCardInfo>
        <h3>{country.name}</h3>
        <TitledCell title="Population" subtitle={`${country.population}`} />
        <TitledCell title="Region" subtitle={`${country.region}`} />
        <TitledCell title="Capital" subtitle={`${country.capital}`} />
      </CountryCardInfo>
    </CountryCardContainer>
  )
}

export default CountryCard
