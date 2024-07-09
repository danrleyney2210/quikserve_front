import { Button } from "../../components/Atomos/Button"
import { Template } from "../template"
import * as S from './styles'

export const Login = () => {
  return (
    <Template>
      <S.Content>
        <h1> Login</h1>
        <div>
          <input type="text" placeholder="Digite seu email" name="" id="" />
          <input type="password" placeholder="Digite sua senha" name="" id="" />
          <Button>Entrar</Button>
        </div>
      </S.Content>
    </Template>
  )
}

