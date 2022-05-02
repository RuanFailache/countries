import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const SelectContainer = styled.div`
  display: block;
  width: 200px;
  position: relative;
`

export const SelectBox = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border: none;
  border-radius: 8px;
  color: ${theme.colors.neutral.white};
  background-color: ${theme.colors.dark.element};
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

  &:hover {
    border-radius: 8px;
    background-color: red;
  }

  &:first-child {
    opacity: 0.5;
  }

  &:first-child:hover {
    background-color: transparent;
  }
`
