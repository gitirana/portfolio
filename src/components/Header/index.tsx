import { HeaderContainer, ButtonsWrapper } from './styles.ts'
import { ButtonWrapper } from '../Button/index'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src="src/assets/logo.svg" alt="" />

        <ButtonsWrapper>
          <ButtonWrapper
            type="secondary"
            icon="github"
            header
            url="https://github.com/gitirana"
          />
          <ButtonWrapper
            type="secondary"
            icon="linkedin"
            header
            url="https://linkedin.com/in/gitirana"
          />

          <ButtonWrapper
            type="primary"
            icon="url"
            label="Resume file"
            header
            url="https://drive.google.com/drive/folders/1_9RJ_PjIdpIo1LdNnacU6Qiw9d5wZ_LK"
          />
        </ButtonsWrapper>
      </HeaderContainer>
    </>
  )
}
