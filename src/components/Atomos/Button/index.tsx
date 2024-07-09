import { ButtonHTMLAttributes } from 'react';
import * as S from './style'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  disabled?: boolean
}

export const Button: React.FC<IProps> = ({ children, disabled, ...rest }: IProps) => {
  return (
    <S.Button isDisabled={disabled ?? false} {...rest}>{children}</S.Button>
  )
}

