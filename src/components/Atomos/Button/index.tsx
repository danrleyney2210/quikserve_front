import { ButtonHTMLAttributes } from 'react';
import * as S from './style'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<IProps> = ({ children, ...rest }: IProps) => {
  return (
    <S.Button {...rest}>{children}</S.Button>
  )
}

