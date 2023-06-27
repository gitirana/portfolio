import { ButtonWrapper } from '../../../components/Button'
import { Contact, Container, Wrapper } from './styles'

export function ContactMe() {
  return (
    <Container>
      Contact Me
      <Wrapper>
        <Contact>
          <ButtonWrapper type="secondary" icon="envelope" />
          thaynalgitirana@gmail.com
        </Contact>

        <Contact>
          <ButtonWrapper
            type="secondary"
            icon="linkedin"
            url="https://linkedin.com/in/gitirana"
          />
          @gitirana
        </Contact>

        <Contact>
          <ButtonWrapper
            type="secondary"
            icon="github"
            url="https://github.com/gitirana"
          />
          @gitirana
        </Contact>
      </Wrapper>
    </Container>
  )
}
