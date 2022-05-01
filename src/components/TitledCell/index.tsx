import { FunctionComponent } from 'react'
import * as StyledComponent from './styles'

interface TitledCellProps {
  title: string
  subtitle: string
}

const TitledCell: FunctionComponent<TitledCellProps> = function ({
  title,
  subtitle,
}) {
  return (
    <StyledComponent.TitledCell>
      <strong>{title}:</strong> {subtitle}
    </StyledComponent.TitledCell>
  )
}

export default TitledCell
