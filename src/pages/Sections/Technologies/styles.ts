import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 2rem;
  font-weight: 500;
  color: ${(props) => props.theme['gray-100']};
  gap: 1.5rem;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

export const Badge = styled.div`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme['gray-800']};
  font-size: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const BadgeCounter = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  padding: 0.25rem;
  background-color: ${(props) => props.theme['violet-100']};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
`
