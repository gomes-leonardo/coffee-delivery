import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Coffee } from '../../components/CoffeeCard'

interface CartContextType {
  itemCount: number
  incrementItem: () => void
  decrementItem: () => void
  selectedCoffees: Coffee[]
  addToCart: (coffee: Coffee) => void
  removeFromCart: (coffee: Coffee) => void
}

const CartContext = createContext<CartContextType>({
  itemCount: 0,
  incrementItem: () => {},
  decrementItem: () => {},
  selectedCoffees: [],
  addToCart: () => {},
  removeFromCart: () => {},
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

  const addToCart = () => {
    setSelectedCoffees([...selectedCoffees])
  }

  const removeFromCart = (coffee: Coffee) => {
    const updatedCoffees = selectedCoffees.filter((c) => c.id !== coffee.id)
    setSelectedCoffees(updatedCoffees)
  }

  return (
    <CartContext.Provider
      value={{
        itemCount,
        incrementItem,
        decrementItem,
        addToCart,
        removeFromCart,
        selectedCoffees,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
