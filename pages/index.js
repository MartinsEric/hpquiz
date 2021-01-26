import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter()
  const [ nome, setNome ] = useState('')

  function submit(event) {
    event.preventDefault()
    router.push(`/quiz?nome=${nome}`)
  }

  function onChangeNome(novoNome) {
    setNome(novoNome)
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Harry Potter Quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Harry Potter</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(event) => submit(event)}>
              <input 
                name='nome'
                placeholder='Digite seu nome'
                onChange={(event) => onChangeNome(event.target.value)} 
                value={nome}
              />
              <button type='submit' disabled={!nome.length}>
                Jogar
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quiz da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl='https://github.com/martinsEric'/>
    </QuizBackground>
  )
}
