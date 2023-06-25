import {
  Container,
  Content,
  AreaText,
  FormArea,
  Input,
  Textarea,
  Redes
} from './styles'

import { useSelector } from 'react-redux'
import { RootState } from '../../stores'

import linkedin_light from '../../asserts/icons/bg-light/linkedin_light.png'
import github_light from '../../asserts/icons/bg-light/github_light.png'
import whatsapp_light from '../../asserts/icons/bg-light/what_light.png'

import linkedin_dark from '../../asserts/icons/bg-black/linkedin_black.png'
import github_dark from '../../asserts/icons/bg-black/github _black.png'
import whatsapp_dark from '../../asserts/icons/bg-black/what_black.png'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Form = () => {
  const { buttonDark } = useSelector((state: RootState) => state.mode)
  const [email, setEmail] = useState('')
  const [name, setname] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: { preventDefault: () => void }) {
    e.preventDefault()
    if (email === '' || name === '' || message === '') {
      return alert('Prencha todos os campos')
    }

    const templateParams = {
      from_name: name,
      email: email,
      message: message
    }

    emailjs
      .send(
        'service_kuanpak',
        'template_mhrtcwb',
        templateParams,
        '0dXm38eVeUEI4unW_'
      )
      .then((response) => {
        alert('Email enviado com sucesso')
        console.log(response.status, response.text)
        setEmail('')
        setname('')
        setMessage('')
      })
      .catch((error) => {
        alert('Email não foi enviado')
        console.log('Error: ' + error)
      })
  }

  return (
    <Container>
      <Content>
        <AreaText>
          <h2>Formulário de Contato</h2>
          <p>
            Preencha o formulário para entrarmos em contato por e-mail ou clique
            nos ícones abaixo para entrarmos em contato.
          </p>
          {buttonDark ? (
            <Redes>
            <a href="https://www.linkedin.com/in/angelo-pedrosa/">
              <img src={linkedin_dark} alt="linkedin" />
            </a>
            <a href="https://github.com/Angelo-pdr">
              <img src={github_dark} alt="github" />
            </a>
            <a href="https://wa.me/5531975732125">
              <img src={whatsapp_dark} alt="whatsapp" />
            </a>
          </Redes>
          ) : (
            <Redes>
            <a href="https://www.linkedin.com/in/angelo-pedrosa/">
              <img src={linkedin_light} alt="linkedin" />
            </a>
            <a href="https://github.com/Angelo-pdr">
              <img src={github_light} alt="github" />
            </a>
            <a href="https://wa.me/5531975732125">
              <img src={whatsapp_light} alt="whatsapp" />
            </a>
          </Redes>
          )

          }
        </AreaText>
        <FormArea mode={buttonDark} onSubmit={sendEmail}>
          <h1>Contato</h1>
          <Input
            type="text"
            placeholder="Digite seu nome"
            required
            value={name}
            onChange={(event) => setname(event.target.value)}
          />
          <Input
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Textarea
            placeholder="Digite sua messagem"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></Textarea>
          <Input type="submit" className="button" />
        </FormArea>
      </Content>
    </Container>
  )
}

export default Form
