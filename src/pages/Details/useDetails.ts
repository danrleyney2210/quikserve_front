import React, { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ICart, Product } from '../home/types';
import { useNavigate, useParams } from 'react-router-dom';
import { dataAll } from '../home/mock';

const initialvalues = {
  products: []
}

export const useDetails = () => {
  const [cart, setCart] = useLocalStorage<ICart>({ storageKey: '@cart', initialValue: initialvalues })
  const [typeMeat, setTypeMeat] = useState('0')
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()

  const { idCategory, id } = useParams()

  function plus() {
    setQuantity((prev: number) => prev + 1)
  }

  function less() {
    if (quantity <= 1) {
      return
    }
    setQuantity((prev: number) => prev - 1)
  }

  const findItem = dataAll.sections.find((i) => i.id === Number(idCategory))!.items.find((i) => i.id === Number(id))!


  function addToCart() {
    const alreadyExistProduct = cart.products.some((product: Product) => product.id === findItem.id);

    if (alreadyExistProduct) {
      const updatedProducts = cart.products.map((prod: Product) =>
        prod.id === findItem.id
          ? { ...prod, quantity: prod.quantity + quantity, total: (prod.quantity + 1) * prod.price }
          : prod
      );

      const result = {
        products: updatedProducts
      }

      setCart(result);

    } else {
      setCart({
        products: [
          ...cart.products,
          {
            id: findItem.id,
            name: findItem.name,
            quantity: 1,
            description: findItem.description ?? '',
            meat: Number(typeMeat),
            price: Number(findItem.price),
            total: (quantity * findItem.price) + Number(typeMeat)
          }
        ]
      })
    }


    navigate('/');
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeMeat(e.target.value);
  };
  return {
    plus,
    less,
    addToCart,
    handleChange,
    navigate,
    findItem,
    typeMeat,
    quantity
  }
}
