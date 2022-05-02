import { FaMoon } from 'react-icons/fa'
import { theme } from '../../utils/theme'
import { StyledContainer } from '../StyledContainer'
import * as StyledComponent from './styles'

export default function Header() {
  return (
    <StyledContainer bgColor={theme.colors.dark.element}>
      <StyledComponent.HeaderContainer>
        <h1>Where in the world?</h1>
        <button type="button">
          <FaMoon />
          Dark Mode
        </button>
      </StyledComponent.HeaderContainer>
    </StyledContainer>
  )
}
