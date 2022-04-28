import { FunctionComponent } from 'react'
import { TitledCellStyle } from './styles'

interface TitledCellProps {
  title: string
  subtitle: string
}

const TitledCell: FunctionComponent<TitledCellProps> = function ({
  title,
  subtitle,
}) {
  return (
    <TitledCellStyle>
      <strong>{title}:</strong> {subtitle}
    </TitledCellStyle>
  )
}

export default TitledCell
