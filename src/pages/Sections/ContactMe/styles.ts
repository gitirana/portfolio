import styled from 'styled-components'

export const Container = styled.div`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const Contact = styled.div`
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  align-items: center;
  gap: 0.5rem;
`
