import { Wrapper, Badge, BadgeCounter, Container } from './styles'

export function Technologies() {
  return (
    <Container>
      Technologies
      <Wrapper>
        <Badge>
          <BadgeCounter>9</BadgeCounter>
          <span>React</span>
        </Badge>

        <Badge>
          <BadgeCounter>9</BadgeCounter>
          <span>Angular</span>
        </Badge>
        <Badge>
          <BadgeCounter>10</BadgeCounter>
          <span>Typescript</span>
        </Badge>
        <Badge>
          <BadgeCounter>9</BadgeCounter>
          <span>React</span>
        </Badge>
      </Wrapper>
    </Container>
  )
}
