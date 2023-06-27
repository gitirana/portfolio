import { HeaderContainer, ButtonsWrapper } from './styles.ts'
import { ButtonWrapper } from '../Button/index'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src="src/assets/logo.svg" alt="" />

        <ButtonsWrapper>
          <ButtonWrapper type="secondary" icon="github" header />
          <ButtonWrapper type="secondary" icon="linkedin" header />
          <ButtonWrapper
            type="secondary"
            icon="url"
            label="Resume file"
            header
          />
          <ButtonWrapper type="primary" icon="user" label="Contact me" header />
        </ButtonsWrapper>
      </HeaderContainer>
    </>
  )
}
