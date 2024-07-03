import React, { InputHTMLAttributes } from 'react';
import * as S from './styles'

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  id?: string
}

export const Radio = ({ children, id, ...rest }: IinputProps) => {
  return (
    <S.WrapperInputRadio>
      {children}
      <label htmlFor={id}>
        <div>
          <strong>1 meat</strong>
          <span>R$33,00</span>
        </div>
        <input type="radio" {...rest} />
      </label>
    </S.WrapperInputRadio>
  )
}

