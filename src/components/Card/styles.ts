import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem 1.5rem;
  gap: 0.5rem;
  width: 100%;
  border: 2px solid transparent;
  cursor: pointer;

  & h1 {
    font-size: 1.5rem;
    font-weight: 500;
    text-transform: capitalize;
    color: ${(props) => props.theme['gray-100']};
  }

  & span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme['gray-200']};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['violet-100']};
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 1.25rem;
    }
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`
