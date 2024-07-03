import * as S from './styles'
import IconMenu from '../../../assets/icons/menu.svg'

export const Menu = () => {
  return (
    <S.Wrapper>
      <span></span>
      <p>Menu</p>
      <div>
        <img src={IconMenu} alt="" />
      </div>
    </S.Wrapper>
  )
}

