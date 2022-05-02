import { useParams } from 'react-router-dom'
import * as ContainerComponent from '../../components/Container'
import { theme } from '../../utils/theme'
import CountryInfo from './components/CountryInfo'
import GoBackHeader from './components/GoBackHeader'
import useGetCountryByName from './hooks/useGetCountry'

export default function Country() {
  const { name } = useParams()
  const { country, loading, borderCountries } = useGetCountryByName(name)

  if (loading || !country) return <div>Carregando...</div>

  return (
    <ContainerComponent.Container bgColor={theme.colors.dark.background}>
      <ContainerComponent.ContentContainer>
        <GoBackHeader />
        <CountryInfo country={country} borderCountries={borderCountries} />
      </ContainerComponent.ContentContainer>
    </ContainerComponent.Container>
  )
}
