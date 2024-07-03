import { Menu } from '../../components/Molecules/Menu'
import MainImage from '../../assets/image/main.svg'
import * as S from './styles'

interface IProps {
  children: React.ReactNode
}


export const Template = ({ children }: IProps) => {
  return (
    <S.Wrraper>
      <Menu />
      <S.Header>
        <img src={MainImage} alt="" />
      </S.Header>
      <S.Body>
        {children}
      </S.Body>
    </S.Wrraper>
  )
}
