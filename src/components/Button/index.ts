import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 8px;
  color: ${theme.colors.neutral.white};
  background-color: ${theme.colors.dark.element};
  cursor: pointer;
  outline: none;

  &:hover {
    filter: brightness(90%);
  }
`
