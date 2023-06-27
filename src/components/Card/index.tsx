import { Container, Wrapper } from './styles'
import { Badge } from '../Badge/index'

export function Card() {
  return (
    <Container>
      <h1>ignite-timer</h1>
      <span>
        RocketSeat To Do is an app developed during Ignite (Rocketseats
        Bootcamp) and its used to manage your daily tasks in the form of a to-do
        list.
      </span>

      <Wrapper>
        <Badge label="React" />
      </Wrapper>
    </Container>
  )
}
