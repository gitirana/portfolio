import { Header } from '../../components/Header/index'
import { AboutMe } from '../Sections/AboutMe/index.tsx'

import { MainContainer } from './styles.ts'

export function Main() {
  return (
    <MainContainer>
      <Header />

      <AboutMe />
    </MainContainer>
  )
}
