import { Container, Badge, Wrapper } from './styles'

export function Card() {
  return (
    <Container>
      <h1>ignite-timer</h1>
      <span>
        RocketSeat To Do is an app developed during Ignite (Rocketseat's
        Bootcamp) and it's used to manage your daily tasks in the form of a
        to-do list.
      </span>

      <Wrapper>
        <Badge>
          <span>React</span>
        </Badge>
      </Wrapper>
    </Container>
  )
}
