import { useState } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

import {
  Activities,
  Container,
  MenuWrapper,
  ActivitiesWrapper,
  BadgeWrapper,
  ExperienceWrapper,
  Role,
  Time,
  WorkWrapper,
} from './styles'

import { ButtonWrapper } from '../Button'
import { Badge } from '../Badge'

import { workExperience } from '../../contents/work-experience'

export function Menu() {
  const [isTalentTabActive, setIsTalentTabActive] = useState(true)

  function handleTalentTabActive(): void {
    if (!isTalentTabActive) {
      const activeTab = true
      setIsTalentTabActive(activeTab)
    }
  }

  function handleLocusTabActive(): void {
    if (isTalentTabActive) {
      const activeTab = false
      setIsTalentTabActive(activeTab)
    }
  }

  return (
    <Container>
      <MenuWrapper>
        <div onClick={handleTalentTabActive}>
          {isTalentTabActive ? (
            <ButtonWrapper type="primary" label="Talent Academy" active />
          ) : (
            <ButtonWrapper type="tertiary" label="Talent Academy" unactive />
          )}
        </div>
        <div onClick={handleLocusTabActive}>
          {isTalentTabActive ? (
            <ButtonWrapper
              type="tertiary"
              label="Locus Custom Software"
              unactive
            />
          ) : (
            <ButtonWrapper
              type="primary"
              label="Locus Custom Software"
              active
            />
          )}
        </div>
      </MenuWrapper>

      {isTalentTabActive ? (
        <WorkWrapper>
          <h3>{workExperience[0].company}</h3>
          <ExperienceWrapper>
            {workExperience[0].roles.map((item, index) => {
              return (
                <>
                  <Role key={index}>{item.role}</Role>
                  <Time key={index + 1}> {item.time}</Time>
                  <BadgeWrapper key={index + 2}>
                    {item.technologies.map((tech, index) => {
                      return <Badge label={tech} key={index} />
                    })}
                  </BadgeWrapper>

                  <ActivitiesWrapper key={index + 3}>
                    {item.jobDescription.map((description: string, index) => {
                      return (
                        <Activities key={index}>
                          <ArrowRight weight="bold" />
                          <span>{description}</span>
                        </Activities>
                      )
                    })}
                  </ActivitiesWrapper>
                </>
              )
            })}
          </ExperienceWrapper>
        </WorkWrapper>
      ) : (
        <WorkWrapper>
          <h3>{workExperience[1].company}</h3>
          <ExperienceWrapper>
            {workExperience[1].roles.map((item) => {
              return (
                <>
                  <Role>{item.role}</Role>
                  <Time> {item.time}</Time>
                  <BadgeWrapper>
                    {item.technologies.map((tech, index) => {
                      return <Badge label={tech} key={index} />
                    })}
                  </BadgeWrapper>

                  <ActivitiesWrapper>
                    {item.jobDescription.map((description: string, index) => {
                      return (
                        <Activities key={index}>
                          <ArrowRight weight="bold" />
                          <span>{description}</span>
                        </Activities>
                      )
                    })}
                  </ActivitiesWrapper>
                </>
              )
            })}
          </ExperienceWrapper>
        </WorkWrapper>
      )}
    </Container>
  )
}
