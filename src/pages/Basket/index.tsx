import * as S from './styles'
import IconClose from '../../assets/icons/close.svg'
import IconLess from '../../assets/icons/iconLess.svg'
import IconPlus from '../../assets/icons/plus.svg'
import { Button } from '../../components/Atomos/Button'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'

interface Product {
  id: number
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
  const [cart, setCart] = useLocalStorage({ storageKey: '@cart' })
  const navigate = useNavigate()

  function calculateTotal(cart: ICart): number {
    return cart.products.reduce((acc: number, product: Product) => acc + product.total, 0);
  }


  function plus(item: Product) {
    const update: Product = {
      ...item,
      quantity: item.quantity + 1,
      total: (item.quantity * item.price) + item.meat
    };

    const updatedProducts = cart.products.map((i: Product) =>
      i.id === update.id ? update : i
    );

    const result = {
      products: updatedProducts
    };

    setCart(result);

  }

  function less(item: Product) {
    if (item.quantity <= 1) {
      return;
    }

    const update: Product = {
      ...item,
      quantity: item.quantity - 1
    };

    const updatedProducts = cart.products.map((i: Product) =>
      i.id === update.id ? update : i
    );

    const result = {
      products: updatedProducts
    };

    setCart(result);

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

