import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 218px 1fr;
  gap: 1.5rem;
`

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
`

export const WorkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & h3 {
    font-size: 1.25rem;
    font-weight: 500;
  }
`

export const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Role = styled.div`
  color: ${(props) => props.theme['violet-200']};
`

export const Time = styled.div`
  color: ${(props) => props.theme['gray-200']};
  font-size: 0.875rem;
`

export const BadgeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`

export const ActivitiesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`

export const Activities = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  align-items: flex-start;

  & svg {
    color: ${(props) => props.theme['violet-100']};
  }

  & span {
    font-weight: 400;
    color: ${(props) => props.theme['gray-100']};
    width: 100%;
  }
`
