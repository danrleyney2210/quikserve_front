import { Radio } from '../../components/Atomos/Radio'
import IconLess from '../../assets/icons/less.svg'
import IconPlus from '../../assets/icons/plus.svg'
import * as S from './styles'
import { Button } from '../../components/Atomos/Button'
import IconClose from '../../assets/icons/close.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
// import { dataAll } from '../home/mock'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { dataAll } from '../home/mock'
import { Cart, Product } from '../home/types'




export const Details = () => {
  const [cart, setCart] = useLocalStorage({ storageKey: '@cart', initialValue: '' })
  const [typeMeat, setTypeMeat] = useState('0')
  // const [isMobile, setIsMobile] = useState(window.innerWidth < 800);


  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  const { idCategory, id } = useParams()
  const findItem = dataAll.sections.find((i) => i.id === Number(idCategory))!.items.find((i) => i.id === Number(id))!

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
      id: findItem.id,
      name: findItem.name,
      description: findItem.description!,
      quantity: quantity,
      meat: Number(typeMeat),
      price: findItem.price,
      total: (quantity * findItem.price) + Number(typeMeat),
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


  // const handleResize = () => {
  //   setIsMobile(window.innerWidth < 800);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);


  return (
    <S.Wrapper>
      <S.ContentItem>
        <div className="content-img">
          {
            findItem.images ? (<img src={findItem.images[0].image} alt="" />) : (
              <S.NotImage>
                <p>Not Image</p>
              </S.NotImage>
            )
          }

          <div className="btn-close" onClick={() => navigate('/')}>
            <img src={IconClose} alt="" />
          </div>

        </div>
        <div className="description">
          <header>
            <h3>{findItem.name}</h3>
            <p>{findItem.description}</p>
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
            >Add to Order  $ {(quantity * findItem.price) + Number(typeMeat)}</Button>
          </div>
        </div>

      </S.ContentItem>


    </S.Wrapper>
  )
}

