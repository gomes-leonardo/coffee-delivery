import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme.colors['yellow-dark']};
  font-size: 1.5rem;
  margin-top: 3.5rem;
`

export const OrderInformation = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${(props) => props.theme.colors['base-card']};
  min-width: 32rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
    line-height: 1.3;
  }
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`

const STATUS_COLORS = {
  'yellow-normal': '#DBAC2C',
  'yellow-light': '#F1E9C9',
  'yellow-dark': '#C47f17',

  'purple-normal': '#8047F8',
  'purple-light': '#EBE5F9',
  'purple-dark': '#4B2995',
  'base-text': '#574F4D',
} as const

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLORS
}

export const RoundedIcon = styled.div<StatusProps>`
  background-color: ${(props) => props.theme.colors[props.statuscolor]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  padding: 0.5rem;
  border-radius: 50%;

  font-size: 0.875rem;
  width: 2rem;
  height: 2rem;
`

export const MainContainer = styled.div``
