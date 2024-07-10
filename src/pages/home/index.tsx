import * as S from './styles'
import { Input } from '../../components/Atomos/Input'


import IconArrow from '../../assets/icons/arrowTop.svg'
import { Template } from '../template'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Atomos/Button'

import IconPlusSmall from '../../assets/icons/plusLarge.svg'
import IconLessSmall from '../../assets/icons/lessSmall.svg'
// import { API } from '../../service/api'
import { dataAll } from './mock'
import { Cart, ICart, IMenu, Item, Product, Section } from './types'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Radio } from '../../components/Atomos/Radio'
import IconLess from '../../assets/icons/less.svg'
import IconPlus from '../../assets/icons/plus.svg'
import { Modal } from '../../components/Atomos/Modal'
import IconClose from '../../assets/icons/close.svg'


export const Home = () => {
  const [cart, setCart] = useLocalStorage({ storageKey: '@cart' })
  const [activeNow, setActiveNow] = useState("Burgers");
  const [typeMeat, setTypeMeat] = useState('0')
  const [itemSelected, setItemSelected] = useState<Item>({} as Item)
  const [data, setData] = useState<IMenu>()
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);



  const navigate = useNavigate()
  async function getAll() {
    // const result = await API.get('')
    setData(dataAll)
    // return result
  }


  function plusCart(item: Product) {

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

  function lessCart(item: Product) {
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

  function calculateTotal(cart: ICart): number {
    return cart.products.reduce((acc: number, product: Product) => acc + product.total, 0);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeMeat(e.target.value);
  };


  function getDetails(idCategory: number, id: number, product: Item) {
    if (isMobile) {
      navigate(`/details/${idCategory}/${id}`)
    } else {
      setShowModal(!showModal)
      setItemSelected(product)
    }
  }

  function addToCart() {
    const newProduct: Product = {
      id: itemSelected.id,
      name: itemSelected.name,
      description: itemSelected.description!,
      quantity: quantity,
      meat: Number(typeMeat),
      price: itemSelected.price,
      total: (quantity * itemSelected.price) + Number(typeMeat),
    };

    const oldCart: Cart = cart

    setCart({
      products: [
        ...(oldCart?.products ?? []),
        newProduct
      ]
    })

    setShowModal(!showModal)
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth < 800);
  };

  function plus() {
    setQuantity((prev: number) => prev + 1)
  }

  function less() {
    if (quantity <= 1) {
      return
    }
    setQuantity((prev: number) => prev - 1)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  useEffect(() => {
    getAll();

  }, [data])

  return (
    <Template>
      <S.WrapperMain>
        <S.ContentSearch>
          <Input placeholder='Search menu items' />
        </S.ContentSearch>

        <S.Body>
          <S.Content>
            <S.MenuTab>
              {
                data && data.sections.map((item: Section, index: number) => (
                  <S.MenuGategory
                    onClick={() => setActiveNow(item.name)}
                    isActive={activeNow === item.name}
                    href={`#${item.name}`}
                    key={index}
                  >
                    <div className="icon">
                      <img src={item.images[0].image} alt="" />
                    </div>
                    <p>{item.name}</p>
                  </S.MenuGategory>
                ))
              }
            </S.MenuTab>

            <S.ContentItens>
              {
                data && data.sections.map((item: Section) => (
                  <div key={item.name} id={item.name}>
                    <S.HeaderItem>
                      <S.TitleItem>{item.name}</S.TitleItem>
                      <img src={IconArrow} alt="" />
                    </S.HeaderItem>

                    {item.items.map((i: Item) => (
                      <S.Item key={i.id} onClick={() => getDetails(item.id, i.id, i)}>
                        <div className='description'>
                          <strong>{i.name}</strong>
                          <p>{i.description}</p>
                          <strong className='price'>R$ {i.price.toString()}</strong>
                        </div>
                        {
                          i.images && <div className='img'>
                            <img src={i.images[0].image} alt="" />
                          </div>
                        }

                      </S.Item>
                    ))}
                  </div>
                ))
              }

            </S.ContentItens>

            {
              cart?.products && isMobile && <S.ContentBasket>
                <Button onClick={() => navigate('/basket')}> You basket {cart?.products?.length ?? 0}</Button>
              </S.ContentBasket>
            }

            <S.Footer>
              <a href="#">View allergy information</a>
            </S.Footer>
          </S.Content>


          <S.Cart>
            <header>
              <h1>Carrinho</h1>
            </header>

            {
              cart ? (
                <div className="itens">
                  <div className="itens-selected">
                    {cart.products.map((item: Product, index: number) => (
                      <div className='item' key={index}>
                        <div className='description'>
                          <p>{item.name}</p>
                          <div className='content-btn'>
                            <button onClick={() => lessCart(item)}>
                              <img src={IconPlusSmall} alt="" />
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => plusCart(item)}>
                              <img src={IconLessSmall} alt="" />
                            </button>
                          </div>
                        </div>

                        <strong>R$ {item.price}</strong>
                      </div>
                    ))
                    }



                  </div>
                  <div className="sub-total">
                    <p>Sub Total</p>
                    <strong>R$ {calculateTotal(cart)}</strong>
                  </div>
                  <div className="total">
                    <p>Total: </p>
                    <strong>R$ {calculateTotal(cart)}</strong>
                  </div>
                </div>
              ) : (

                <div className='content-text'>
                  <p>Seu Carrinho está vazio</p>
                </div>
              )
            }



          </S.Cart>
        </S.Body>
      </S.WrapperMain>

      <Modal isOpen={showModal} onClose={() => console.log('asdasdasds')}>
        <S.ContentItem>
          <div className="content-img">
            {
              itemSelected.images ? (<img src={itemSelected.images[0].image} alt="" />) : (
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
              <h3>{itemSelected.name}</h3>
              <p>{itemSelected.description}</p>
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
              >Add to Order  $ {(quantity * itemSelected.price) + Number(typeMeat)}</Button>
            </div>
          </div>

        </S.ContentItem>
      </Modal>

    </Template>
  )
}

