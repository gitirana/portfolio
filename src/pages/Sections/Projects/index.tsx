import { Container, Wrapper, Footer } from './styles'

import { Card } from '../../../components/Card'
import { ButtonWrapper } from '../../../components/Button'

import api from '../../../services/api'
import { useState } from 'react'

interface Repository {
  id: number
  name: string
  description: string
  topics: string[]
  clone_url: string
}

export function Projects() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  api.get('users/gitirana/repos?per_page=100&page=1').then((res) => {
    const repositoriesList: Repository[] = res.data.filter(
      (repo: Repository) =>
        repo.name === 'portfolio' ||
        repo.name === 'GoInk' ||
        repo.name === 'Github-Explorer',
    )

    setRepositories(repositoriesList)
  })

  return (
    <Container>
      Projects
      <Wrapper>
        {repositories.map((repo) => {
          return (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              topics={repo.topics}
              clone_url={repo.clone_url}
            />
          )
        })}
      </Wrapper>
      <Footer>
        <ButtonWrapper
          icon="out"
          label="More projects"
          type="primary"
          url="https://github.com/gitirana?tab=repositories"
        />
      </Footer>
    </Container>
  )
}
