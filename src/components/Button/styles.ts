import styled from 'styled-components'

const TYPE_COLORS = {
  primary: 'violet-300',
  secondary: 'gray-800',
  tertiary: 'gray-900',
}

const HOVER_COLORS = {
  primary: 'violet-200',
  secondary: 'gray-700',
  tertiary: 'gray-800',
}

interface TypeProps {
  typeColor: keyof typeof TYPE_COLORS
  active: boolean
  unactive: boolean
}

export const ButtonContainer = styled.button<TypeProps>`
  padding: 0.5rem 1rem;
  background: ${(props) => props.theme[TYPE_COLORS[props.typeColor]]};
  border: 0;
  border-radius: 8px;
  color: ${(props) => props.theme['gray-100']};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme[HOVER_COLORS[props.typeColor]]};
  }

  ${({ active }) =>
    active &&
    `
    width: 100%;
  `}

  ${({ unactive }) =>
    unactive &&
    `
    width: 100%;
    font-weight: 400;
  `}

  @media (max-width: 768px) {
    & span {
      visibility: hidden;
    }
  }
`
