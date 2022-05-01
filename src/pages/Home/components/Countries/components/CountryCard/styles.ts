import styled from 'styled-components'
import { theme } from '../../../../../../utils/theme'

export const CountryCardContainer = styled.li`
  display: block;
  border-radius: 8px;
  width: calc((1150px - 3 * 32px) / 4);
  background-color: ${theme.colors.dark.element};
`

export const CountryCardFlag = styled.img`
  display: block;
  width: inherit;
  height: 160px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`

export const CountryCardInfo = styled.div`
  padding: 16px;
`
