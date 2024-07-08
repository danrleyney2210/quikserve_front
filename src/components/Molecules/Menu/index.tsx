import * as S from './styles'
import IconMenu from '../../../assets/icons/menu.svg'
import { NavLink } from 'react-router-dom';
import IconClose from '../../../assets/icons/close-mobile.svg'
import { useState } from 'react';

export const Menu = () => {
  const [isActvieMenu, setIsActiveMenu] = useState(false)

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

      <div className='content-mobile'>
        <span></span>
        <p>MENU</p>
        <div className='menu-hamburguer'>
          <img src={IconMenu} alt="" onClick={() => setIsActiveMenu(!isActvieMenu)} />
        </div>
      </div>

      <S.MobileMenu isActive={isActvieMenu}>
        <img src={IconClose} alt="" onClick={() => setIsActiveMenu(!isActvieMenu)} />
        <nav>
          <NavLink to={'/'}>
            INÍCIO
          </NavLink>
          <NavLink to={'/login'}>
            ENTRAR
          </NavLink>
          <NavLink to={'/contact'}>
            CONTATO
          </NavLink>

        </nav>
      </S.MobileMenu>
    </S.Wrapper>
  )
}

