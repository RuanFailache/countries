import * as ContainerComponent from '../../components/Container'
import { theme } from '../../utils/theme'
import Countries from './components/Countries'
import CountriesSearchForm from './components/CountriesSearchForm'
import useGetCountries from './hooks/useGetCountries'

export default function Home() {
  const { regions, loading, countries, filterCountries } = useGetCountries()

  return (
    <ContainerComponent.Container bgColor={theme.colors.dark.background}>
      <ContainerComponent.ContentContainer>
        <CountriesSearchForm
          regions={regions}
          filterCountries={filterCountries}
        />
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <Countries countries={countries} />
        )}
      </ContainerComponent.ContentContainer>
    </ContainerComponent.Container>
  )
}
