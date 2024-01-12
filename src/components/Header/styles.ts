import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.5rem;
`

export const Localization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  background-color: ${(props) => props.theme.colors['purple-light']};
  padding: 0.6rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['purple-dark']};
  font-size: 0.875rem;
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  background-color: ${(props) => props.theme.colors['yellow-light']};
  padding: 0.6rem;
  border-radius: 6px;
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: 0.875rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 0.5rem;
  }

  &.active {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartItemCount = styled.span`
  background-color: ${(props) => props.theme.colors['yellow-dark']};
  color: #ffffff;
  border-radius: 50%;
  padding: 5px;
  width: 20px;
  height: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`
