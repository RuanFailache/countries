import styled from 'styled-components'
import { theme } from '../../../../utils/theme'

export const CountryInfoContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 64px;
`

export const CountryInfoFlag = styled.img`
  width: 50%;
`

export const CountryInfoTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.neutral.white};
`

export const CountryInfoList = styled.ul`
  display: grid;
  grid:
    'cell-0 cell-5'
    'cell-1 cell-6'
    'cell-2 cell-7'
    'cell-3 empty'
    'cell-4 empty';
  gap: 16px 64px;
  margin-top: 32px;
  margin-bottom: 64px;
`

interface CountryInfoItemProps {
  gridArea: string
}

export const CountryInfoItem = styled.li<CountryInfoItemProps>`
  grid-area: ${(props) => props.gridArea};
`

export const BorderCountriesContainer = styled.div`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: ${theme.colors.neutral.white};

  strong {
    font-weight: bold;
    white-space: nowrap;
  }
`

export const BorderCountriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const BorderCountriesItem = styled.li`
  padding: 8px 16px;
  background-color: ${theme.colors.dark.element};
  border-radius: 8px;
`
