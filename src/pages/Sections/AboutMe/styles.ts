import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`

export const Avatar = styled.img.attrs({
  src: `https://www.github.com/gitirana.png`,
})`
  height: 19rem;
  width: 19rem;
  border-radius: 50%;
`
