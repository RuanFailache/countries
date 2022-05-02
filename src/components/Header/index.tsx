import { FaMoon } from 'react-icons/fa'
import { theme } from '../../utils/theme'
import { Container } from '../Container'
import * as StyledComponent from './styles'

export default function Header() {
  return (
    <Container bgColor={theme.colors.dark.element}>
      <StyledComponent.HeaderContainer>
        <StyledComponent.HeaderTitle>
          Where in the world?
        </StyledComponent.HeaderTitle>
        <StyledComponent.HeaderButton type="button">
          <FaMoon />
          <span>Dark Mode</span>
        </StyledComponent.HeaderButton>
      </StyledComponent.HeaderContainer>
    </Container>
  )
}
