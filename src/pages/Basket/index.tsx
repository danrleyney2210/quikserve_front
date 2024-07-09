import * as S from './styles'
import IconClose from '../../assets/icons/close.svg'
import IconLess from '../../assets/icons/iconLess.svg'
import IconPlus from '../../assets/icons/plus.svg'
import { Button } from '../../components/Atomos/Button'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

interface Product {
  name: string;
  quantity: number;
  meat: number;
  price: number;
  total: number
}

interface ICart {
  products: Product[];
}

export const Basket = () => {
  const [cart] = useLocalStorage({ storageKey: '@cart' })
  const navigate = useNavigate()

  function calculateTotal(cart: ICart): number {
    return cart.products.reduce((acc: number, product: Product) => acc + product.total, 0);
  }

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
              <button>
                <img src={IconLess} alt="" />
              </button>
              <strong>{item.quantity}</strong>
              <button>
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

