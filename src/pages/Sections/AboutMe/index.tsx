import { Container, TextWrapper, Avatar } from './styles.ts'

export function AboutMe() {
  return (
    <Container>
      <TextWrapper>
        <h1>Hi, I am Thayná Gitirana</h1>
        <h3>About me</h3>
        <span>
          Full Stack Developer with UI/UX experience and a Control and
          Automation Engineering student. Passionate about creating innovative
          and user-friendly applications. Highly skilled in front-end and
          back-end development, with a strong understanding of the entire
          software development lifecycle.
        </span>
      </TextWrapper>

      <Avatar />
    </Container>
  )
}
