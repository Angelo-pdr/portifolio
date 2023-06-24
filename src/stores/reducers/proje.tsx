import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import evento_ficticio from '../../asserts/projetosImgs/evento_ficticio.png'
import lading_page_avatar2 from '../../asserts/projetosImgs/lading_page_avatar2.png'
import lading_page_cinema from '../../asserts/projetosImgs/lading_page_cinema.png'
import landing_page_pet_shop from '../../asserts/projetosImgs/landing_page_pet_shop.png'
import lista_de_contatos from '../../asserts/projetosImgs/lista_de_contatos.png'
import ProjectProps from '../../models/proje'

type ProjectState = {
  projects: ProjectProps[]
}

const initialState: ProjectState = {
  projects: [
    {
      id: 1,
      img: `${evento_ficticio}`,
      technos: ['JavaScript', 'Less', 'Grunt'],
      title: 'Landing Page Aniversário',
      about:
        'Uma landing page responsiva para o meu aniversário, com um slideshow e uma contagem regressiva até a data do aniversário, usando uma data fictícia.',
      links: [
        {
          link: 'https://github.com/Angelo-pdr/evento_ficticio',
          name: 'GitHub'
        },
        {
          link: 'https://evento-ficticio-lemon.vercel.app/',
          name: 'View'
        }
      ]
    },
    {
      id: 2,
      img: `${lading_page_avatar2}`,
      technos: ['JavaScript', 'Sass', 'Gulp'],
      title: 'Landing Page Avatar 2',
      about:
        'Uma landing page responsiva do filme Avatar 2, com um slideshow, tabs, um menu expansível e uma contagem regressiva até o lançamento do filme com uma data fictícia',
      links: [
        {
          link: 'https://github.com/Angelo-pdr/landing_page_avatar2',
          name: 'GitHub'
        },
        {
          link: 'https://landing-page-avatar2.vercel.app/',
          name: 'View'
        }
      ]
    },
    {
      id: 3,
      img: `${lista_de_contatos}`,
      technos: ['TypeScript', 'Styled-components', 'Redux', 'React-Router'],
      title: 'lista_de_contatos',
      about:
        'Uma lista de contatos onde adicionamos novos contatos, também podemos remover contatos e adicionar contatos aos favoritos.',
      links: [
        {
          link: 'https://github.com/Angelo-pdr/lista_de_contatos/',
          name: 'GitHub'
        },
        {
          link: 'https://lista-de-contatos-five.vercel.app/',
          name: 'View'
        }
      ]
    },
    {
      id: 4,
      img: `${lading_page_cinema}`,
      technos: ['JavaScript', 'Css', 'Bootstrap'],
      title: 'Uma landing page Cinema',
      about:
        'Uma landing page responsiva de um cinema, com um slideshow e filmes.',
      links: [
        {
          link: 'https://github.com/Angelo-pdr/landi-page-cinema',
          name: 'GitHub'
        },
        {
          link: 'https://landi-page-cinema.vercel.app/',
          name: 'View'
        }
      ]
    },
    {
      id: 5,
      img: `${landing_page_pet_shop}`,
      technos: ['JavaScript', 'Css', 'Bootstrap'],
      title: 'e-commerce de Pet Shop',
      about:
        'Uma landing page responsiva de um e-commerce de pet shop, com um slideshow e produtos.',
      links: [
        {
          link: 'https://github.com/Angelo-pdr/landing-page-pet-shop',
          name: 'GitHub'
        },
        {
          link: 'https://landing-page-pet-shop-two.vercel.app/',
          name: 'View'
        }
      ]
    }
  ]
}

const technosSlice = createSlice({
  name: 'technologies',
  initialState,

  reducers: {
    projectFilter: (state, action: PayloadAction<string>) => {
      state.projects = state.projects.filter(
        (techno) => techno.title !== action.payload
      )
    }
  }
})

export const { projectFilter } = technosSlice.actions
export default technosSlice.reducer
