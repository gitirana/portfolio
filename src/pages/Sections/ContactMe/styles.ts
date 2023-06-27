import styled from 'styled-components'

export const Container = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`

export const Contact = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
