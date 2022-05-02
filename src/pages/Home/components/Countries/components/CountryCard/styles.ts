import styled from 'styled-components'
import { theme } from '../../../../../../utils/theme'

export const CountryCardContainer = styled.li`
  display: block;
  border-radius: 8px;
  width: calc((1150px - 3 * 32px) / 4);
  background-color: ${theme.colors.dark.element};
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`

export const CountryCardFlag = styled.img`
  display: block;
  width: inherit;
  height: 160px;
  border-radius: 8px 8px 0 0;
  object-fit: cover;
`

export const CountryCardInfo = styled.div`
  padding: 16px;

  h3 {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    color: ${theme.colors.neutral.white};
    margin-bottom: 16px;
    max-width: 80%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  p + p {
    margin-top: 8px;
  }
`
