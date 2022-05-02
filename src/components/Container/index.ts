import styled from 'styled-components'

interface ContainerProps {
  bgColor: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${(props) => props.bgColor};
`

export const ContentContainer = styled.div`
  max-width: 1150px;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
`
