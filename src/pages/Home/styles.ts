import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const CountryContainer = styled.div`
  padding: 32px;
  background-color: ${theme.colors.dark.background};
`

export const CountryList = styled.ul`
  display: flex;
  gap: 32px;
  flex-flow: row wrap;
  padding: 32px;
`
