import { Container, Wrapper } from './styles'
import { Badge } from '../Badge/index'

interface CardProps {
  name: string
  description: string
  topics: string[]
  clone_url: string
}

export function Card(props: CardProps) {
  return (
    <Container
      onClick={() => {
        window.open(props.clone_url, '_blank')
      }}
    >
      <h1>{props.name}</h1>
      <span>{props.description}</span>

      <Wrapper>
        {props.topics.map((item, index) => {
          return <Badge key={index} label={item} />
        })}
      </Wrapper>
    </Container>
  )
}
