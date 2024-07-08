import { Menu } from '../../components/Molecules/Menu'
import MainImage from '../../assets/image/main.svg'
import MainImageMobile from '../../assets/image/main-mobile.svg'
import * as S from './styles'
import { useEffect, useState } from 'react'

interface IProps {
  children: React.ReactNode
}


export const Template = ({ children }: IProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);


  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Wrraper>
      <Menu />
      <S.Header>
        <img src={isMobile ? MainImageMobile : MainImage} alt="" />
      </S.Header>
      <S.Body>
        {children}
      </S.Body>
    </S.Wrraper>
  )
}
