import React, { useState } from 'react'
import {
  BorderCart,
  CardContainer,
  CoffeeType,
  Counter,
  Description,
  Price,
  PriceContainer,
  Title,
} from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

interface Coffee {
  id: number
  image: string
  type: string[]
  title: string
  price: number
  description: string
}

interface CoffeeCardProps {
  coffee: Coffee
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
  const uppercasedTypes = coffee.type.map((type) => type.toUpperCase())

  const [count, setCount] = useState(0)

  const handleCount = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    if (count === 0) return
    setCount(count - 1)
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
        <Counter>
          <Minus
            color="purple"
            weight="fill"
            cursor={'pointer'}
            onClick={handleDecrement}
          />
          <span style={{ fontWeight: '600' }}>{count}</span>
          <Plus color="purple" cursor={'pointer'} onClick={handleCount} />
        </Counter>
        <BorderCart>
          <ShoppingCart size={20} weight="fill" color="white" />
        </BorderCart>
      </PriceContainer>
    </CardContainer>
  )
}

export default CoffeeCard
