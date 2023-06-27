import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  padding: 2rem 3rem;

  display: grid;
  grid-template-columns: 1fr;
  align-items: flex-start;
  gap: 3.375rem;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
    gap: 2.5rem;
    margin: 0;
  }
`
