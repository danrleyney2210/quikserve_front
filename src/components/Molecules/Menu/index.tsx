import * as S from './styles'
import IconMenu from '../../../assets/icons/menu.svg'
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <S.Wrapper>
      <span></span>
      <nav>
        <NavLink to={'/'}>
          MENU
        </NavLink>
        <NavLink to={'/login'}>
          ENTRAR
        </NavLink>
        <NavLink to={'/contact'}>
          CONTATO
        </NavLink>
      </nav>
      <div>
        <img src={IconMenu} alt="" />
      </div>
    </S.Wrapper>
  )
}

