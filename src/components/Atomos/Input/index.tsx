import * as S from './styles'
import IconSearch from '../../../assets/icons/search.svg'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string
}

export const Input = ({ placeholder, ...rest }: InputProps) => {
  return (
    <S.WrapperInput>
      <img src={IconSearch} alt="Search Icon" />
      <input type="text" placeholder={placeholder} {...rest} />
    </S.WrapperInput>
  )
}

