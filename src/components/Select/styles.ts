import styled from 'styled-components'
import { theme } from '../../utils/theme'
import { Button } from '../Button'

export const SelectContainer = styled.div`
  display: block;
  width: 200px;
  position: relative;
`

export const SelectBox = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const Dropdown = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  margin-top: 16px;
  border-radius: 8px;
  position: absolute;
  background-color: ${theme.colors.dark.element};
  box-sizing: border-box;
`

export const DropdownItem = styled.li`
  color: ${theme.colors.neutral.white};
  padding: 16px;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background: inherit;
    filter: brightness(90%);
  }

  &:first-child {
    opacity: 0.5;
  }

  &:first-child:hover {
    background-color: transparent;
  }
`
