import { Container, Wrapper, Footer } from './styles'

import { Card } from '../../../components/Card'
import { ButtonWrapper } from '../../../components/Button'

export function Projects() {
  return (
    <Container>
      Projects
      <Wrapper>
        <Card />
        <Card />
        <Card />
      </Wrapper>
      <Footer>
        <ButtonWrapper icon="out" label="More projects" type="primary" />
      </Footer>
    </Container>
  )
}
