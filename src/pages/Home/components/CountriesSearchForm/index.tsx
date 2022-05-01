import { FunctionComponent } from 'react'
import { Controller, useForm } from 'react-hook-form'

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
      <form>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <input
              value={field.value}
              onChange={(event) => {
                field.onChange(event)
                filterCountries('name', event.target.value)
              }}
            />
          )}
        />

        <select
          defaultValue=""
          onChange={(e) => filterCountries('region', e.target.value)}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
    )
  }

export default CountriesSearchForm
