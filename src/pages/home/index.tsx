import * as S from './styles'
import { Input } from '../../components/Atomos/Input'


import IconArrow from '../../assets/icons/arrowTop.svg'
import { Template } from '../template'
import { Button } from '../../components/Atomos/Button'

import IconPlusSmall from '../../assets/icons/plusLarge.svg'
import IconLessSmall from '../../assets/icons/lessSmall.svg'
import { Item, Product, Section } from './types'

import { Radio } from '../../components/Atomos/Radio'
import IconLess from '../../assets/icons/less.svg'
import IconPlus from '../../assets/icons/plus.svg'
import { Modal } from '../../components/Atomos/Modal'
import { useHome } from './useHome'

export const Home = () => {
  const {
    activeNow,
    addToCart,
    calculateTotal,
    getDetails,
    handleChange,
    less,
    lessCart,
    plus,
    plusCart,
    setActiveNow,
    data,
    cart,
    isModalShow,
    setIsModalShow,
    navigate,
    itemSelected,
    isMobile,
    typeMeat,
    quantity
  } = useHome()


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

      <Modal isOpen={isModalShow} onClose={() => setIsModalShow(false)}>
        <S.ContentItem>
          <div className="content-img">
            {
              itemSelected.images ? (<img src={itemSelected.images[0].image} alt="" />) : (
                <S.NotImage>
                  <p>Not Image</p>
                </S.NotImage>
              )
            }


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

