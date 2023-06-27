import styled from 'styled-components'

export const BadgeContainer = styled.div`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme['gray-800']};
  font-size: 1rem;
  border-radius: 8px;

  & span {
    font-weight: 500;
  }
`
