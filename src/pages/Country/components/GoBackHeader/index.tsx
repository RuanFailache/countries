import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import * as StyledComponents from './styles'

const GoBackHeader = function () {
  const navigate = useNavigate()

  return (
    <StyledComponents.GoBackContainer>
      <StyledComponents.GoBackButton
        type="button"
        onClick={() => navigate('/')}
      >
        <FaArrowLeft />
        <span>Back</span>
      </StyledComponents.GoBackButton>
    </StyledComponents.GoBackContainer>
  )
}

export default GoBackHeader
