import { Radio } from '../../components/Atomos/Radio'
import ImgBurgerItem from '../../assets/image/burger2.svg'
import IconLess from '../../assets/icons/less.svg'
import IconPlus from '../../assets/icons/plus.svg'
import * as S from './styles'
import { Button } from '../../components/Atomos/Button'
import IconClose from '../../assets/icons/close.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import { dataAll } from '../home/mock'
import { useLocalStorage } from '../../hooks/useLocalStorage'


interface Product {
  name: string;
  quantity: number;
  meat: number;
  price: number;
  total: number
}

interface Cart {
  products: Product[];
}

// const initialCartValue = JSON.stringify({
//   products: []
// });


export const Details = () => {
  const [cart, setCart] = useLocalStorage({ storageKey: '@cart', initialValue: '' })
  const [typeMeat, setTypeMeat] = useState('0')

  const [quantity, setQuantity] = useState(1);
  const [price] = useState(17)
  const navigate = useNavigate()



  function plus() {
    setQuantity((prev: number) => prev + 1)
  }

  function less() {
    if (quantity <= 1) {
      return
    }
    setQuantity((prev: number) => prev - 1)
  }

  function addToCart() {
    const newProduct: Product = {
      name: 'Teste',
      quantity: quantity,
      meat: Number(typeMeat),
      price: 33,
      total: (quantity * price) + Number(typeMeat),
    };

    const oldCart: Cart = cart

    setCart({
      products: [
        ...(oldCart?.products ?? []),
        newProduct
      ]
    })


    navigate('/');
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeMeat(e.target.value);
  };

  // useEffect(() => {
  //   const result = dataAll.sections.find((i) => {
  //     const result = i.items.find
  //   })
  // }, [])


  return (
    <S.Wrapper>
      <S.ContentItem>
        <div className="content-img">
          <img src={ImgBurgerItem} alt="" />
          <div className="btn-close" onClick={() => navigate('/')}>
            <img src={IconClose} alt="" />
          </div>

        </div>
        <div className="description">
          <header>
            <h3>Smash Brooks</h3>
            <p>100g pressed hamburger, mozzarella cheese, pickles, red onion, grilled bacon and traditional Heinz mayonnaise.</p>
          </header>

          <div className="choose">
            <strong>Choose your size</strong>
            <span>Select 1 option</span>
          </div>

          <div className="type">
            <Radio name='product' quantity={1} price='33.00' value={33.00} onChange={handleChange} />
          </div>
          <div className="type">
            <Radio name='product' quantity={2} price='35.00' value={35.00} onChange={handleChange} />

          </div>
          <div className="type">
            <Radio name='product' quantity={3} price='37.00' value={37.00} onChange={handleChange} />

          </div>

          <div className="quantity">
            <div className='buttons'>
              <button className='less' onClick={() => less()}>
                <img src={IconLess} alt="" />
              </button>
              <span>{quantity}</span>
              <button className='plus' onClick={() => plus()}>
                <img src={IconPlus} alt="" />
              </button>
            </div>
            <Button
              onClick={() => addToCart()}
              disabled={!(Number(typeMeat) > 0)}
            >Add to Order  $ {(quantity * price) + Number(typeMeat)}</Button>
          </div>
        </div>

      </S.ContentItem>
    </S.Wrapper>
  )
}

