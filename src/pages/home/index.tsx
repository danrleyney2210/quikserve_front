import * as S from './styles'
import { Input } from '../../components/Atomos/Input'

import ImgBurgerItem from '../../assets/image/burger2.svg'
import imgBurguer from '../../assets/image/burguer.svg'
import imgDrink from '../../assets/image/drink.svg'
import imgDessert from '../../assets/image/desserts.svg'
import IconArrow from '../../assets/icons/arrowTop.svg'
import { Template } from '../template'
import { Modal } from '../../components/Atomos/Modal'
import { useState } from 'react'
import { Radio } from '../../components/Atomos/Radio'
import { Button } from '../../components/Atomos/Button'
import IconLess from '../../assets/icons/less.svg'
import IconPlus from '../../assets/icons/plus.svg'

import IconPlusSmall from '../../assets/icons/plusLarge.svg'
import IconLessSmall from '../../assets/icons/lessSmall.svg'



export const Home = () => {
  const [showModalItem, setShowModalItem] = useState(true);

  return (
    <Template>
      <S.WrapperMain>
        <S.ContentSearch>
          <Input placeholder='Search menu items' />
        </S.ContentSearch>

        <S.Body>
          <S.Content>
            <S.MenuTab>
              <div className="category">
                <div className="icon">
                  <img src={imgBurguer} alt="" />
                </div>
                <a href="#">Burguers</a>
              </div>

              <div className="category">
                <div className="icon">
                  <img src={imgDrink} alt="" />
                </div>
                <a href="#">Drinks</a>
              </div>

              <div className="category">
                <div className="icon">
                  <img src={imgDessert} alt="" />
                </div>
                <a href="#">Desserts</a>
              </div>
            </S.MenuTab>

            <S.ContentItens>
              <S.HeaderItem>
                <S.TitleItem>Burgers</S.TitleItem>
                <img src={IconArrow} alt="" />
              </S.HeaderItem>

              <S.Item>
                <div className='description'>
                  <strong>Hardcore</strong>
                  <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                  <strong className='price'>R$33,00</strong>
                </div>
                <div className='img'>
                  <img src="" alt="" />
                </div>
              </S.Item>
              <S.Item>
                <div className='description'>
                  <strong>Hardcore</strong>
                  <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                  <strong className='price'>R$33,00</strong>
                </div>
                <div className='img'>
                  <img src="" alt="" />
                </div>
              </S.Item>
              <S.Item>
                <div className='description'>
                  <strong>Hardcore</strong>
                  <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                  <strong className='price'>R$33,00</strong>
                </div>
                <div className='img'>
                  <img src="" alt="" />
                </div>
              </S.Item>
              <S.Item>
                <div className='description'>
                  <strong>Hardcore</strong>
                  <p>180g angus beef burger, plus ribs, gruyere cheese...</p>
                  <strong className='price'>R$33,00</strong>
                </div>
                <div className='img'>
                  <img src="" alt="" />
                </div>
              </S.Item>
            </S.ContentItens>
          </S.Content>


          <S.Cart>
            <header>
              <h1>Carrinho</h1>
            </header>

            {/* <div className='content-text'>
              <p>Seu Carrinho está vazio</p>
            </div> */}

            <div className="itens">
              <div className="itens-selected">
                <div className='item'>
                  <div className='description'>
                    <p>Caipirinha</p>
                    <div className='content-btn'>
                      <button>
                        <img src={IconPlusSmall} alt="" />
                      </button>
                      <span>1</span>
                      <button>
                        <img src={IconLessSmall} alt="" />
                      </button>
                    </div>
                  </div>

                  <strong>R$13,00</strong>
                </div>

                <div className='item'>
                  <div className='description'>
                    <p>Caipirinha</p>
                    <small>Com 2 carnes </small>
                    <div className='content-btn'>
                      <button>
                        <img src={IconPlusSmall} alt="" />
                      </button>
                      <span>1</span>
                      <button>
                        <img src={IconLessSmall} alt="" />
                      </button>
                    </div>
                  </div>

                  <strong>R$13,00</strong>
                </div>

              </div>
              <div className="sub-total">
                <p>Sub Total</p>
                <strong>£22.50</strong>
              </div>
              <div className="total">
                <p>Total: </p>
                <strong>£22.50</strong>
              </div>
            </div>
          </S.Cart>
        </S.Body>
      </S.WrapperMain>

      <Modal isOpen={showModalItem} onClose={() => setShowModalItem(!showModalItem)}>
        <S.ModalDetailsItem>
          <div className="content-img">
            <img src={ImgBurgerItem} alt="" />
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
              <Radio name='product' />
            </div>
            <div className="type">
              <Radio name='product'>
              </Radio>
            </div>

            <div className="quantity">
              <div className='buttons'>
                <button className='less'>
                  <img src={IconLess} alt="" />
                </button>
                <span>1</span>
                <button className='plus'>
                  <img src={IconPlus} alt="" />
                </button>
              </div>
              <Button>Add to Order * $11.75</Button>
            </div>
          </div>

        </S.ModalDetailsItem>
      </Modal>

    </Template>
  )
}

