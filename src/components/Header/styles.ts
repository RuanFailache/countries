import styled from 'styled-components'
import { theme } from '../../utils/theme'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1150px;
  height: 70px;
  margin: 0 auto;
`

export const HeaderTitle = styled.h1`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: ${theme.colors.neutral.white};
`

export const HeaderButton = styled.button`
  display: flex;
  gap: 12px;
  border: none;
  font-size: 16px;
  color: ${theme.colors.neutral.white};
  background-color: transparent;
`
