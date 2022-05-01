import { StyledContainer } from '../../components/StyledContainer'
import { theme } from '../../utils/theme'
import Countries from './components/Countries'
import useGetCountries from './hooks/useGetCountries'
import * as StyledComponent from './styles'

export default function Home() {
  const { countries, loading } = useGetCountries()

  return (
    <StyledContainer bgColor={theme.colors.dark.background}>
      <StyledComponent.HomeContainer>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <Countries countries={countries} />
        )}
      </StyledComponent.HomeContainer>
    </StyledContainer>
  )
}
