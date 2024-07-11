import { Radio } from '../../components/Atomos/Radio'
import IconLess from '../../assets/icons/less.svg'
import IconPlus from '../../assets/icons/plus.svg'
import * as S from './styles'
import { Button } from '../../components/Atomos/Button'
import IconClose from '../../assets/icons/close.svg'
import { useDetails } from './useDetails'


export const Details = () => {
  const {
    findItem,
    addToCart,
    handleChange,
    less,
    plus,
    navigate,
    quantity,
    typeMeat
  } = useDetails()

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

