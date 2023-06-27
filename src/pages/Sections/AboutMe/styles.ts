import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & h1 {
    font-weight: 500;
    font-size: 3rem;
    color: ${(props) => props.theme['violet-100']};
  }

  & h3 {
    font-weight: 500;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-100']};
  }

  & span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-200']};
  }

  @media (max-width: 768px) {
    & h1 {
      font-size: 1.5rem;
      text-align: center;
    }

    & h3 {
      font-size: 1.5rem;
    }

    & span {
      font-size: 1rem;
    }
  }
`

export const Avatar = styled.img.attrs({
  src: `https://www.github.com/gitirana.png`,
})`
  height: 19rem;
  width: 19rem;
  border-radius: 50%;

  @media (max-width: 768px) {
    height: 9rem;
    width: 9rem;
  }
`
