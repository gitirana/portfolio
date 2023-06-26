import { Header } from '../../components/Header/index'
import { AboutMe } from '../Sections/AboutMe/index.tsx'
import { Technologies } from '../Sections/Technologies/index.tsx'

import { MainContainer } from './styles.ts'

export function Main() {
  return (
    <MainContainer>
      <Header />

      <AboutMe />
      <Technologies />
    </MainContainer>
  )
}
