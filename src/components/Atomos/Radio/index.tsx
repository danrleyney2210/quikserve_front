import React, { InputHTMLAttributes } from 'react';
import * as S from './styles'

interface IinputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  quantity: number
  price: string
  id?: string
}

export const Radio = ({ children, quantity, price, id, ...rest }: IinputProps) => {
  return (
    <S.WrapperInputRadio>
      {children}
      <label htmlFor={id}>
        <div>
          <strong>{quantity} meat</strong>
          <span>R$ {price}</span>
        </div>
        <input type="radio" id={id} {...rest} />
        <span className='btn-radio'></span>
      </label>
    </S.WrapperInputRadio>
  )
}

