import styled from 'styled-components'

export const BadgeContainer = styled.div`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`
