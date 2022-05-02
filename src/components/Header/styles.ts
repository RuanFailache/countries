import styled from 'styled-components'
import { theme } from '../../utils/theme'
import { Button } from '../Button'

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

export const HeaderButton = styled(Button)`
  display: flex;
  gap: 12px;
`
