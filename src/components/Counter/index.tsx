import React from 'react'
import { Trash } from 'phosphor-react'
import {
  CounterContainer,
  MainContainer,
  Remove,
  StyledMinus,
  StyledPlus,
} from './style'

interface CounterProps {
  count: number
  onIncrement: () => void
  onDecrement: () => void
  onRemoveAllCoffees?: () => void
  showRemoveButton?: boolean
}

const Counter: React.FC<CounterProps> = ({
  count,
  onIncrement,
  onDecrement,
  onRemoveAllCoffees,
  showRemoveButton = false,
}) => {
  return (
    <MainContainer>
      <CounterContainer>
        <StyledMinus onClick={onDecrement} weight="fill" cursor={'pointer'} />
        <span style={{ fontWeight: '600' }}>{count}</span>
        <StyledPlus onClick={onIncrement} cursor={'pointer'} weight="fill" />
      </CounterContainer>
      {showRemoveButton && (
        <CounterContainer>
          <Trash onClick={onRemoveAllCoffees} cursor={'pointer'} />
          <Remove>REMOVER</Remove>
        </CounterContainer>
      )}
    </MainContainer>
  )
}

export default Counter
