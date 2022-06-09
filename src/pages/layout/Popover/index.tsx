import { ReactNode } from "react"
import * as S from './styles'

interface PopOverProps {
  children: ReactNode
}

const Popover = ({ children }: PopOverProps) => {
  return (
    <S.Popover>
      { children }
    </S.Popover>
  )
}

export default Popover