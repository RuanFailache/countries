import { theme } from '../../utils/theme'
import { StyledContainer } from '../StyledContainer'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <StyledContainer bgColor={theme.colors.dark.element}>
      <HeaderContainer>
        <h1>Where in the world?</h1>
        <button type="button">Dark Mode</button>
      </HeaderContainer>
    </StyledContainer>
  )
}
