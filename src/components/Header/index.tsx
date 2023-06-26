import { HeaderContainer, ButtonsWrapper } from './styles.ts'
import { ButtonWrapper } from '../Button/index'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src="src/assets/logo.svg" alt="" />

        <ButtonsWrapper>
          <ButtonWrapper type="secondary" icon="github" />
          <ButtonWrapper type="secondary" icon="linkedin" />
          <ButtonWrapper type="secondary" icon="url" label="Resume file" />
          <ButtonWrapper type="primary" icon="user" label="Contact me" />
        </ButtonsWrapper>
      </HeaderContainer>
    </>
  )
}
