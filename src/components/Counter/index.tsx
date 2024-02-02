import React from 'react'
import { Plus, Minus, Trash } from 'phosphor-react'
import { CounterContainer, Remove } from './style'

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
    <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
      <CounterContainer>
        <Minus
          onClick={onDecrement}
          color="#8047F8"
          weight="fill"
          cursor={'pointer'}
        />
        <span style={{ fontWeight: '600' }}>{count}</span>
        <Plus
          onClick={onIncrement}
          color="#8047F8"
          cursor={'pointer'}
          weight="fill"
        />
      </CounterContainer>
      {showRemoveButton && (
        <CounterContainer>
          <Trash
            onClick={onRemoveAllCoffees}
            color="#8047F8"
            cursor={'pointer'}
          />
          <Remove>REMOVER</Remove>
        </CounterContainer>
      )}
    </div>
  )
}

export default Counter
