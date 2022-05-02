import { FunctionComponent, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import * as StyledComponent from './styles'

interface SelectProps {
  defaultValue: string
  options: string[]
  onSelect: (option: string) => void
}

const Select: FunctionComponent<SelectProps> = function ({
  defaultValue,
  options,
  onSelect,
}) {
  const [selected, setSelected] = useState('')
  const [shouldAppearDropdown, setShouldAppearDropdown] = useState(false)

  const openDropdown = () => {
    setShouldAppearDropdown(!shouldAppearDropdown)
  }

  const handleSelectOption = (
    option: string,
    callback: (value: string) => void,
  ) => {
    setSelected(option)
    callback(option)
    setShouldAppearDropdown(false)
  }

  return (
    <StyledComponent.SelectContainer>
      <StyledComponent.SelectBox type="button" onClick={openDropdown}>
        <p>{selected || defaultValue}</p>
        <FaAngleDown />
      </StyledComponent.SelectBox>

      {shouldAppearDropdown && (
        <StyledComponent.Dropdown>
          <StyledComponent.DropdownItem value="">
            {defaultValue}
          </StyledComponent.DropdownItem>

          {options.map((option) => (
            <StyledComponent.DropdownItem
              key={option}
              value={option}
              onClick={() => handleSelectOption(option, onSelect)}
            >
              {option}
            </StyledComponent.DropdownItem>
          ))}
        </StyledComponent.Dropdown>
      )}
    </StyledComponent.SelectContainer>
  )
}

export default Select
