import { ButtonContainer } from './styles.ts'
import {
  LinkedinLogo,
  GithubLogo,
  LinkSimple,
  User,
  ArrowSquareOut,
  EnvelopeSimple,
} from '@phosphor-icons/react'

interface ButtonProps {
  type: 'primary' | 'secondary' | 'tertiary'
  icon?: string
  label?: string
  active?: boolean
  unactive?: boolean
  header?: boolean
}

export function ButtonWrapper({
  type = 'primary',
  icon,
  label,
  active = false,
  unactive = false,
  header = false,
}: ButtonProps) {
  const isMobile = window.innerWidth < 768 && header

  return (
    <>
      <ButtonContainer typeColor={type} active={active} unactive={unactive}>
        {icon &&
          (icon === 'linkedin' ? (
            <LinkedinLogo weight="bold" size={20} />
          ) : icon === 'github' ? (
            <GithubLogo weight="bold" size={20} />
          ) : icon === 'url' ? (
            <LinkSimple weight="bold" size={isMobile ? 20 : 16} />
          ) : icon === 'user' ? (
            <User weight="bold" size={isMobile ? 20 : 16} />
          ) : icon === 'out' ? (
            <ArrowSquareOut weight="bold" />
          ) : (
            <EnvelopeSimple weight="bold" size={20} />
          ))}{' '}
        {!isMobile && label}
      </ButtonContainer>
    </>
  )
}
