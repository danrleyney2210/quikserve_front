import * as S from './styles'
import IconClose from '../../assets/icons/close.svg'
import IconLess from '../../assets/icons/iconLess.svg'
import IconPlus from '../../assets/icons/plus.svg'
import { Button } from '../../components/Atomos/Button'
import { useBasket } from './useBasket'
import { Product } from '../home/types'

export const Basket = () => {
  const { calculateTotal, less, navigate, plus, cart } = useBasket()

  return (
    <S.Wrapper>
      <header>
        <span></span>
        <p>Basket</p>
        <img src={IconClose} alt="" onClick={() => navigate('/')} />
      </header>

      {cart.products.map((item: Product, index: number) => (
        <S.Item key={index}>
          <div className="header">
            <p>{item.name}</p>
            <strong>R$ {item.price}</strong>
          </div>
          <div className='info'>
            <p>1 Meats (+R$ {item.meat})</p>
            <div className="content-buttom">
              <button onClick={() => less(item)}>
                <img src={IconLess} alt="" />
              </button>
              <strong>{item.quantity}</strong>
              <button onClick={() => plus(item)}>
                <img src={IconPlus} alt="" />
              </button>
            </div>
          </div>
        </S.Item>
      ))
      }
      <S.Total>
        <div className='subtotal'>
          <small>Subtotal</small>
          <strong>
            R$ {calculateTotal(cart)}
          </strong>
        </div>
        <div className='total'>
          <p>Total</p>
          <strong>R$ {calculateTotal(cart)}</strong>
        </div>
      </S.Total>
      <S.ContentButton>
        <Button onClick={() => navigate('/')}>Checkout now</Button>
      </S.ContentButton>
    </S.Wrapper>
  )
}

