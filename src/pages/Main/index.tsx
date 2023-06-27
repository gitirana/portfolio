import { Header } from '../../components/Header/index'
import { AboutMe } from '../Sections/AboutMe/index.tsx'
import { Technologies } from '../Sections/Technologies/index.tsx'
import { Projects } from '../Sections/Projects/index.tsx'
import { WorkExperience } from '../Sections/WorkX/index.tsx'
import { ContactMe } from '../Sections/ContactMe/index.tsx'

import { MainContainer } from './styles.ts'

export function Main() {
  return (
    <MainContainer>
      <Header />

      <AboutMe />
      <Technologies />
      <Projects />
      <WorkExperience />
      <ContactMe />
    </MainContainer>
  )
}
