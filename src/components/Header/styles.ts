import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../utils/theme'
import { Button } from '../Button'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1150px;
  height: 70px;
  margin: 0 auto;
`

export const HeaderTitle = styled(Link)`
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.neutral.white};
`

export const HeaderButton = styled(Button)`
  display: flex;
  gap: 12px;
`
