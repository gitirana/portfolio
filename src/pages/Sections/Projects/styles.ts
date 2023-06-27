import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-100']};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`
