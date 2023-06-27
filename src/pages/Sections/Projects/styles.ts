import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-100']};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`
