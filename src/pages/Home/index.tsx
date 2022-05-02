import { Container } from '../../components/Container'
import { theme } from '../../utils/theme'
import Countries from './components/Countries'
import CountriesSearchForm from './components/CountriesSearchForm'
import useGetCountries from './hooks/useGetCountries'
import * as StyledComponent from './styles'

export default function Home() {
  const { regions, loading, countries, filterCountries } = useGetCountries()

  return (
    <Container bgColor={theme.colors.dark.background}>
      <StyledComponent.HomeContainer>
        <CountriesSearchForm
          regions={regions}
          filterCountries={filterCountries}
        />
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <Countries countries={countries} />
        )}
      </StyledComponent.HomeContainer>
    </Container>
  )
}
