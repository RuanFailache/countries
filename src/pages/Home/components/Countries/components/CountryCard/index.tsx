import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import TitledCell from '../../../../../../components/TitledCell'
import Country from '../../../../../../interfaces/country'
import formatNumber2Comma from '../../../../../../utils/formatNumber2Comma'
import * as StyledComponent from './styles'

interface CountryCardsProps {
  country: Country
}

const CountryCard: FunctionComponent<CountryCardsProps> = function ({
  country,
}) {
  const navigate = useNavigate()

  return (
    <StyledComponent.CountryCardContainer
      onClick={() => navigate(`/country/${country.name}`)}
    >
      <StyledComponent.CountryCardFlag src={country.flag} alt={country.name} />
      <StyledComponent.CountryCardInfo>
        <h3>{country.name}</h3>
        <TitledCell
          title="Population"
          subtitle={formatNumber2Comma(country.population)}
        />
        <TitledCell title="Region" subtitle={`${country.region}`} />
        <TitledCell title="Capital" subtitle={`${country.capital}`} />
      </StyledComponent.CountryCardInfo>
    </StyledComponent.CountryCardContainer>
  )
}

export default CountryCard
