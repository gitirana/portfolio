import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem 1.5rem;
  gap: 0.5rem;

  & h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${(props) => props.theme['gray-100']};
  }

  & span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-200']};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`
