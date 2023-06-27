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
}

export function ButtonWrapper({
  type = 'primary',
  icon,
  label,
  active = false,
  unactive = false,
}: ButtonProps) {
  return (
    <>
      <ButtonContainer typeColor={type} active={active} unactive={unactive}>
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
        {label}
      </ButtonContainer>
    </>
  )
}
