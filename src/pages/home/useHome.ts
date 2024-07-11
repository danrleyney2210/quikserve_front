import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ICart, IMenu, Item, Product } from './types';
import { dataAll } from './mock';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const initialvalues = {
  products: []
}

export const useHome = () => {
  const [isModalShow, setIsModalShow] = useState(false)
  const [cart, setCart] = useLocalStorage<ICart>({ storageKey: '@cart', initialValue: initialvalues })
  const [activeNow, setActiveNow] = useState("Burgers");
  const [typeMeat, setTypeMeat] = useState('0')
  const [itemSelected, setItemSelected] = useState<Item>({} as Item)
  const [data, setData] = useState<IMenu>()
  const [quantity, setQuantity] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);

  const navigate = useNavigate()
  async function getAll() {
    setData(dataAll)
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
      setIsModalShow(true)
      setItemSelected(product)
    }
  }

  function addToCart() {
    const alreadyExistProduct = cart.products.some((product: Product) => product.id === itemSelected.id);

    if (alreadyExistProduct) {
      const updatedProducts = cart.products.map((prod: Product) =>
        prod.id === itemSelected.id
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
            id: itemSelected.id,
            name: itemSelected.name,
            quantity: 1,
            description: itemSelected.description ?? '',
            meat: Number(typeMeat),
            price: Number(itemSelected.price),
            total: (quantity * itemSelected.price) + Number(typeMeat)
          }
        ]
      })
    }

    setIsModalShow(!isModalShow)
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
  return {
    less,
    plus,
    addToCart,
    getDetails,
    handleChange,
    calculateTotal,
    lessCart,
    plusCart,
    activeNow,
    setActiveNow,
    data,
    isMobile,
    setIsMobile,
    navigate,
    cart,
    isModalShow,
    setIsModalShow,
    itemSelected,
    typeMeat,
    quantity
  }
}

