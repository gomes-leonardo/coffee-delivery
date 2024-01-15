import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 1.5rem;
`
export const Container = styled.div`
  margin-top: 0.9rem;
  width: 640px;
  height: 591;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  h3 {
    font-size: 16px;
    color: ${(props) => props.theme.colors['base-subtitle']};
    line-height: 30px;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors['base-text']};
  }
`
export const ContainerForm = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto auto;

  gap: 1rem;

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors['base-hover']};
    border: none;
  }

  input:nth-child(1) {
    grid-column: span 1;
  }

  input:nth-child(2) {
    grid-column: span 3;
  }

  input:nth-child(3) {
    grid-column: span 1;
  }

  input:nth-child(4) {
    grid-column: span 2;
  }

  input:nth-child(5) {
    grid-column: span 1;
  }

  input:nth-child(6) {
    grid-column: span 2;
  }

  input:nth-child(7) {
    grid-column: span 3;
  }
`
export const Footer = styled.div`
  margin-top: 0.9rem;
  width: 640px;
  height: 591;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  h3 {
    font-size: 16px;
    color: ${(props) => props.theme.colors['base-subtitle']};
    line-height: 30px;
    font-weight: normal;
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors['base-text']};
  }
`
export const ButtonContainer = styled.button`
  display: flex;
  gap: 0.5rem;
  padding: 0.7rem;
  border: none;
  background-color: unset;

  button {
    border: none;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors['base-hover']};
    color: ${(props) => props.theme.colors['base-text']};
    display: flex;
    align-items: center;
    gap: 0.4rem;
    cursor: pointer;
    border: 1px solid transparent;
  }
`

export const BuyContainer = styled.div`
  margin-top: 0.9rem;

  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`

export const ButtonConfirm = styled.button`
  background-color: ${(props) => props.theme.colors['yellow-normal']};
  width: 368px;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  font-weight: bold;

  cursor: pointer;
`
