import styled from 'styled-components'
import { Button } from '../../../../components/Button'
import { theme } from '../../../../utils/theme'

export const CountryList = styled.ul`
  display: flex;
  gap: 32px;
  flex-flow: row wrap;
`

export const CountryPaginationContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`

export const CountryPaginationText = styled.p`
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  color: ${theme.colors.neutral.white};
`

export const CountryPaginationButton = styled(Button)`
  width: 120px;
  font-weight: bold;
`
