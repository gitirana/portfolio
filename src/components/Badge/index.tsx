import { BadgeContainer } from './styles'

interface BadgeProps {
  label: string
}

export function Badge({ label }: BadgeProps) {
  return <BadgeContainer>{label}</BadgeContainer>
}
