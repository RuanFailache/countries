import { FunctionComponent } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { FaSearch } from 'react-icons/fa'
import Select from '../../../../components/Select'
import { theme } from '../../../../utils/theme'
import * as StyledComponent from './styles'

interface CountriesSearchFormProps {
  regions: string[]
  filterCountries: (
    filterType: 'name' | 'region',
    valueToBeFiltered: string,
  ) => void
}

interface CountryNameSearchForm {
  name: string
}

const CountriesSearchForm: FunctionComponent<CountriesSearchFormProps> =
  function ({ regions, filterCountries }) {
    const { control } = useForm<CountryNameSearchForm>({
      defaultValues: {
        name: '',
      },
    })

    return (
      <StyledComponent.SearchContainer>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <StyledComponent.SearchInputContainer>
              <FaSearch color={theme.colors.neutral.white} />
              <StyledComponent.SearchInputText
                placeholder="Search for a country..."
                value={field.value}
                onChange={(event) => {
                  field.onChange(event)
                  filterCountries('name', event.target.value)
                }}
              />
            </StyledComponent.SearchInputContainer>
          )}
        />

        <Select
          defaultValue="Filter by Region"
          options={regions}
          onSelect={(option) => filterCountries('region', option)}
        />
      </StyledComponent.SearchContainer>
    )
  }

export default CountriesSearchForm
