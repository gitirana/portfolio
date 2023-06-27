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
  url?: string
}

export function ButtonWrapper({
  type = 'primary',
  icon,
  label,
  active = false,
  unactive = false,
  header = false,
  url,
}: ButtonProps) {
  const isMobile = window.innerWidth < 768 && header

  function teste() {
    url && window.open(url)
  }

  return (
    <ButtonContainer
      typeColor={type}
      active={active}
      unactive={unactive}
      onClick={teste}
    >
      {icon &&
        (icon === 'linkedin' ? (
          <LinkedinLogo weight="bold" size={20} />
        ) : icon === 'github' ? (
          <GithubLogo weight="bold" size={20} />
        ) : icon === 'url' ? (
          <LinkSimple weight="bold" />
        ) : icon === 'user' ? (
          <User weight="bold" />
        ) : icon === 'out' ? (
          <ArrowSquareOut weight="bold" />
        ) : (
          <EnvelopeSimple weight="bold" size={20} />
        ))}{' '}
      {!isMobile && label}
    </ButtonContainer>
  )
}
