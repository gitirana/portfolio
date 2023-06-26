import styled from 'styled-components'

const TYPE_COLORS = {
  primary: 'violet-300',
  secondary: 'gray-800',
  tertiary: 'gray-900',
}

interface TypeProps {
  typeColor: keyof typeof TYPE_COLORS
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
`