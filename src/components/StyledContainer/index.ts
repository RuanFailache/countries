import styled from 'styled-components'

interface StyledContainerProps {
  bgColor: string
}

export const StyledContainer = styled.div<StyledContainerProps>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`
