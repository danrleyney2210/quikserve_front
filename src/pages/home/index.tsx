import { Menu } from '../../components/Molecules/Menu'
import * as S from './styles'
import MainImage from '../../assets/image/main.svg'
import { Input } from '../../components/Atomos/Input'


import imgBurguer from '../../assets/image/burguer.svg'
import imgDrink from '../../assets/image/drink.svg'
import imgDessert from '../../assets/image/desserts.svg'

export const Home = () => {
  return (
    <S.Wrapper>
      <Menu />
      <S.Header>
        <img src={MainImage} alt="" />
      </S.Header>
      <S.WrapperMain>
        <Input placeholder='Search menu items' />

        <S.MenuTab>
          <div className="category">
            <div className="icon">
              <img src={imgBurguer} alt="" />
            </div>
            <a href="#"></a>
          </div>

          <div className="category">
            <div className="icon">
              <img src={imgDrink} alt="" />
            </div>
            <a href="#"></a>
          </div>

          <div className="category">
            <div className="icon">
              <img src={imgDessert} alt="" />
            </div>
            <a href="#"></a>
          </div>
        </S.MenuTab>
      </S.WrapperMain>

    </S.Wrapper>
  )
}

