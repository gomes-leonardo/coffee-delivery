import styled from 'styled-components'

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  color: ${(props) => props.theme.colors['base-subtitle']};
  font-size: 1.5rem;
`

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  gap: 0.2rem;
  margin-bottom: 2rem;

  h3:nth-child(1) {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 16px;
    font-weight: normal;
  }
  h3:nth-child(2) {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 14px;

    font-weight: normal;
  }
  h3:nth-child(1) {
    color: ${(props) => props.theme.colors['base-title']};
    font-size: 16px;

    line-height: 30px;
    font-weight: normal;
  }
`
export const Container = styled.div`
  margin-top: 0.9rem;
  width: 600px;

  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-normal']};
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors['base-text']};
  }

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
    margin: auto;
  }
  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
    width: 100%;
    margin: auto;
    order: 1;
  }
`
export const StyledForm = styled.form`
  width: 100%;

  gap: 1rem;

  input:nth-child(1) {
    grid-column: span 1;
  }

  input:nth-child(2) {
    grid-column: span 2;
  }

  input:nth-child(3) {
    grid-column: span 1;
  }

  input:nth-child(4) {
    grid-column: span 2;
  }

  input:nth-child(5) {
    grid-column: span 3;
  }

  input:nth-child(6) {
    grid-column: span 2;
  }

  input:nth-child(7) {
    grid-column: span 1;
  }
`
export const InputContainer = styled.div`
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto auto;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-text']};
    border: none;
  }

  input:nth-child(1) {
    grid-column: span 2;
  }

  input:nth-child(2) {
    grid-column: span 4;
  }

  input:nth-child(3) {
    grid-column: span 1;
  }

  input:nth-child(4) {
    grid-column: span 3;
  }

  input:nth-child(5) {
    grid-column: span 2;
  }

  input:nth-child(6) {
    grid-column: span 1;
  }
  input:nth-child(7) {
    grid-column: span 1;
  }
`

export const InputButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    margin: auto;
    flex-direction: column;
  }
`

export const InputRadio = styled.div`
  input[type='radio'] {
    width: 0;
    height: 0;
    position: absolute;

    &:focus {
      box-shadow: none;
    }
  }

  label {
    display: flex;
    align-items: center;
    height: 3.2rem;
    padding: 1rem;
    gap: 0.75rem;
    background: ${(props) => props.theme.colors['base-input']};
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 0.75rem;
    border-radius: 6px;
    border: 1px solid transparent;
    white-space: nowrap;
    text-transform: uppercase;
    transition: background 0.2s color 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors['base-hover']};
      color: ${(props) => props.theme.colors['base-subtitle']};
    }
  }

  input[type='radio']:checked + label {
    background: ${(props) => props.theme.colors['purple-light']};
    border-color: ${(props) => props.theme.colors['purple-normal']};
  }

  input[type='radio']:focus + label {
    background: ${(props) => props.theme.colors['purple-light']};
    border-color: ${(props) => props.theme.colors['purple-normal']};
  }
`
export const CoffeeContainer = styled.div`
  margin-top: 0.9rem;
  margin-top: 0.9rem;

  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px 38px 6px 38px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors['purple-normal']};
  }

  h3 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 16px;
    font-weight: normal;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    margin: auto;
  }

  p {
    font-size: 15px;
    color: ${(props) => props.theme.colors['base-text']};
  }

  @media screen and (max-width: 1024) {
    width: 100%;
    padding: 1.5rem;
    margin: auto;
    order: 3;
  }
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    padding: 1.5rem;
    margin: auto;
    flex-direction: column;
    max-height: 100%;
  }
  @media screen and (max-width: 1024px) {
    padding: 1.5rem;
    margin: auto;

    width: 100%;
    max-height: 100%;
    order: 2;

    align-items: center;
    justify-content: center;
  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;
  width: 100%;
  padding: 1.5rem;

  h3 {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-size: 16px;
    font-weight: normal;
  }

  p {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 18px;
    font-weight: bold;
  }
`

export const Divider = styled.div`
  width: 85%;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  display: flex;

  margin: 1.5rem auto;
`

export const TotalContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    color: ${(props) => props.theme.colors['base-text']};
    font-size: 19px;
  }

  button {
    padding: 15px;
    margin-top: 1rem;
    background-color: ${(props) => props.theme.colors['yellow-normal']};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme.colors.white};
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.colors['yellow-dark']};
      transition: all 0.2s ease-in-out;
    }
  }
`
