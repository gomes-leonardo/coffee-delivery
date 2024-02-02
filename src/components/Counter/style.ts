import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  background-color: ${(props) => props.theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`
export const Remove = styled.span`
  color: ${(props) => props.theme.colors['base-text']};
  font-size: 13px;
  font-weight: 400;
`
