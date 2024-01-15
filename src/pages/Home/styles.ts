import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  p {
    font-family: 'Roboto', sans-serif;

    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    margin-top: 1rem;
    text-align: start;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 4.5rem;
  }

  p {
    font-size: 16px;
    width: 80%;
  }

  img {
    width: 80%;
    margin-bottom: 2.5rem;
  }
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  line-height: 62.4px;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 30.4px;
    text-align: center;
    width: 100%;
  }
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

export const Benefits = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors['base-text']};
`

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: start;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
    margin-top: 3rem;
    gap: 3rem;
  }
`
