import { Minus, Plus } from 'phosphor-react'
import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 8px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`
export const Remove = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 13px;
  font-weight: 400;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 50%;
    flex-direction: column;
  }
`

export const StyledMinus = styled(Minus)`
  color: #8047f8;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
    transition: all 0.2s;
  }
`

export const StyledPlus = styled(Plus)`
  color: #8047f8;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors['purple-dark']};
    transition: all 0.2s;
  }
`
