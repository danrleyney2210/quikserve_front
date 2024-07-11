import { useNavigate } from "react-router-dom";
import { ICart, Product } from "../home/types";
import { useLocalStorage } from "../../hooks/useLocalStorage";


const initialvalues = {
  products: []
}

export const useBasket = () => {
  const [cart, setCart] = useLocalStorage<ICart>({ storageKey: '@cart', initialValue: initialvalues })
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
  return {
    plus,
    less,
    calculateTotal,
    navigate,
    cart
  }
}

