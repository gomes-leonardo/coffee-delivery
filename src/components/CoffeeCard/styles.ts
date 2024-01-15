import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 1rem;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 276px;
  min-height: 360px;
  gap: 1rem;
  margin-bottom: 1.5rem;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`

export const BorderCart = styled.div`
  background-color: ${(props) => props.theme.colors['purple-dark']};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  cursor: pointer;

  border-radius: 4px;

  font-size: 0.875rem;
  width: 2rem;
  height: 2rem;
`

export const Description = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors['base-text']};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  pad: 0.5rem;
`
export const Price = styled.p`
  font-family: 'Baloo 2', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  p {
    font-size: 16px;
    font-weight: normal;
    margin-top: 2%;
  }
`
export const Counter = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 8px;
`
export const CoffeeType = styled.div`
  background-color: ${(props) => props.theme.colors['yellow-light']};
  padding: 0.5rem;
  border-radius: 8px;
  color: ${(props) => props.theme.colors['yellow-normal']};
  font-weight: 600;
  font-size: 0.875rem;
`
