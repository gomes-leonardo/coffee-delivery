import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import {
  BorderCart,
  CardContainer,
  CoffeeType,
  Description,
  Price,
  PriceContainer,
  Title,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import Counter from '../Counter'

export interface Coffee {
  id: number
  image: string
  type: string[]
  title: string
  price: number
  description: string
}

export interface CoffeeCardProps {
  coffee: Coffee
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const uppercasedTypes = coffee.type.map((type) => type.toUpperCase())

  const { removeFromCart, setValue, decrementItem, selectedCoffees } = useCart()
  const [itemCount, setItemCount] = useState(0)

  const handleCount = () => {
    setItemCount(itemCount + 1)
    selectedCoffees.push(coffee)
  }

  const handleDecrement = () => {
    removeFromCart(coffee)
    decrementItem()
    if (itemCount > 0) setItemCount(itemCount - 1)
  }

  const handleAddToCart = () => {
    if (itemCount > 0) {
      setValue()
    }
  }

  return (
    <CardContainer>
      <img src={coffee.image} alt={coffee.title} />
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {uppercasedTypes[0] && <CoffeeType>{uppercasedTypes[0]}</CoffeeType>}
        {uppercasedTypes[1] && <CoffeeType>{uppercasedTypes[1]}</CoffeeType>}
        {uppercasedTypes[2] && <CoffeeType>{uppercasedTypes[2]}</CoffeeType>}
      </div>
      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>
      <PriceContainer>
        <Price style={{ fontSize: '30px', fontWeight: '800' }}>
          <p>R$</p>
          {coffee.price.toFixed(2)}
        </Price>
        <Counter
          onIncrement={handleCount}
          onDecrement={handleDecrement}
          count={itemCount}
        />
        <BorderCart>
          <ShoppingCart
            onClick={handleAddToCart}
            size={20}
            weight="fill"
            color="white"
          />
        </BorderCart>
      </PriceContainer>
    </CardContainer>
  )
}

export default CoffeeCard
