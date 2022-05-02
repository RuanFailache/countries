import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding-top: 32px;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;
  background-color: ${theme.colors.dark.element};
`

export const SearchInputText = styled.input`
  width: ${1150 * 0.3}px;
  border: none;
  color: white;
  background-color: transparent;
  outline: none;

  &::placeholder {
    color: ${theme.colors.neutral.whiteWithOpacity};
  }
`

export const SearchSelect = styled.select`
  width: ${1150 * 0.15}px;
  padding: 16px;
  border: none;
  border-right: 16px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: ${theme.colors.dark.element};
  color: ${theme.colors.neutral.white};
`

export const SearchOption = styled.option`
  line-height: 30px;
`
