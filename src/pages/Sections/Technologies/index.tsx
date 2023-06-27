import { Wrapper, Container } from './styles'
import { Badge } from '../../../components/Badge'

export function Technologies() {
  return (
    <Container>
      Technologies
      <Wrapper>
        <Badge label="ReactJS" />
        <Badge label="Angular" />
        <Badge label="NodeJS" />
        <Badge label="React Native" />
        <Badge label="Typescript" />
        <Badge label="Styled Components" />
        <Badge label="Vite" />
        <Badge label="API Rest" />
      </Wrapper>
    </Container>
  )
}
