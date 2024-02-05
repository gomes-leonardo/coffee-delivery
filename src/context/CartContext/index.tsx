import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Coffee } from '../../components/CoffeeCard'

interface CartContextType {
  itemCount: number
  incrementItem: () => void
  decrementItem: () => void
  selectedCoffees: Coffee[]
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffee: Coffee) => void
  removeAllCoffees: (coffee: Coffee) => void
  setValue: () => void
}

const CartContext = createContext<CartContextType>({
  itemCount: 0,
  incrementItem: () => {},
  decrementItem: () => {},
  selectedCoffees: [],
  addToCart: () => {},
  removeFromCart: () => {},
  setValue: () => {},
  removeAllCoffees: () => {},
})

export const useCart = () => useContext(CartContext)

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [itemCount, setItemCount] = useState(0)
  const [selectedCoffees, setSelectedCoffees] = useState<Coffee[]>([])

  const incrementItem = () => {
    setItemCount(itemCount + 1)
  }

  const decrementItem = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1)
    }
  }

  const addToCart = (coffee: Coffee) => {
    setSelectedCoffees([...selectedCoffees, coffee])
  }

  const setValue = () => {
    setSelectedCoffees([...selectedCoffees])
  }

  const removeFromCart = (coffee: Coffee) => {
    const index = selectedCoffees.findIndex((c) => c.id === coffee.id)
    if (index !== -1) {
      const updatedCoffees = [...selectedCoffees]
      updatedCoffees.splice(index, 1)
      setSelectedCoffees(updatedCoffees)
    }
  }

  const removeAllCoffees = (coffee: Coffee) => {
    const updateCoffees = selectedCoffees.filter((c) => c.id !== coffee.id)
    setSelectedCoffees(updateCoffees)
  }

  const CART_STORAGE_KEY = 'cartData'

  useEffect(() => {
    const cartData = localStorage.getItem(CART_STORAGE_KEY)
    if (cartData) {
      const parsedCartData = JSON.parse(cartData)
      setSelectedCoffees(parsedCartData.selectedCoffees)
      setItemCount(parsedCartData.itemCount)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify({ selectedCoffees, itemCount }),
    )
  }, [selectedCoffees, itemCount])
  return (
    <CartContext.Provider
      value={{
        itemCount,
        incrementItem,
        decrementItem,
        addToCart,
        removeFromCart,
        setValue,
        selectedCoffees,
        removeAllCoffees,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
