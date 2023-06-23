import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import javascript from '../../asserts/tecnologia/javascript.png'
import typescript from '../../asserts/tecnologia/typescript.png'
import react from '../../asserts/tecnologia/react.png'
import vue from '../../asserts/tecnologia/Vue.png'
import flutter from '../../asserts/tecnologia/flutter.png'
import dart from '../../asserts/tecnologia/dart.png'
import mysql from '../../asserts/tecnologia/mysql.png'
import jest from '../../asserts/tecnologia/jest.png'
import cypress from '../../asserts/tecnologia/cypress.png'
import python from '../../asserts/tecnologia/python.png'
import less from '../../asserts/tecnologia/less.png'
import grunt from '../../asserts/tecnologia/grunt.png'
import gulp from '../../asserts/tecnologia/gulp.png'
import sass from '../../asserts/tecnologia/sass.png'
import testing from '../../asserts/tecnologia/testing.png'
import bootstrap from '../../asserts/tecnologia/bootstrap.png'
import TechnologyProps from '../../models/technology'

type technologyState = {
  technos: TechnologyProps[]
}

const initialState: technologyState = {
  technos: [
    {
      id: 1,
      img: `${javascript}`,
      percentage: 95,
      title: 'JavaScript',
      type: 'Front-end'
    },
    {
      id: 2,
      img: `${typescript}`,
      percentage: 85,
      title: 'TypeScript',
      type: 'Front-end'
    },
    {
      id: 3,
      img: `${react}`,
      percentage: 85,
      title: 'React',
      type: 'Front-end'
    },
    {
      id: 4,
      img: `${vue}`,
      percentage: 30,
      title: 'Vue',
      type: 'Front-end'
    },
    {
      id: 5,
      img: `${flutter}`,
      percentage: 20,
      title: 'Flutter',
      type: 'mobile'
    },
    {
      id: 6,
      img: `${dart}`,
      percentage: 20,
      title: 'Dart',
      type: 'frot-end'
    },
    {
      id: 7,
      img: `${mysql}`,
      percentage: 60,
      title: 'Mysql',
      type: 'mobile'
    },
    {
      id: 8,
      img: `${jest}`,
      percentage: 25,
      title: 'Jest',
      type: 'frot-end'
    },
    {
      id: 9,
      img: `${cypress}`,
      percentage: 25,
      title: 'Cypress',
      type: 'frot-end'
    },
    {
      id: 10,
      img: `${python}`,
      percentage: 15,
      title: 'Python',
      type: 'back-end'
    },
    {
      id: 11,
      img: `${less}`,
      percentage: 70,
      title: 'Less',
      type: 'frot-end'
    },
    {
      id: 12,
      img: `${grunt}`,
      percentage: 35,
      title: 'Grunt',
      type: 'frot-end'
    },
    {
      id: 13,
      img: `${gulp}`,
      percentage: 30,
      title: 'gulp',
      type: 'frot-end'
    },
    {
      id: 14,
      img: `${sass}`,
      percentage: 70,
      title: 'Sass',
      type: 'frot-end'
    },
    {
      id: 15,
      img: `${testing}`,
      percentage: 20,
      title: 'Testing Library',
      type: 'frot-end'
    },
    {
      id: 17,
      img: `${bootstrap}`,
      percentage: 20,
      title: 'Bootstrap',
      type: 'frot-end'
    }
  ]
}

const technosSlice = createSlice({
  name: 'technologies',
  initialState,

  reducers: {
    technoFilter: (state, action: PayloadAction<string>) => {
      state.technos = state.technos.filter(
        (techno) => techno.title !== action.payload
      )
    }
  }
})

export const { technoFilter } = technosSlice.actions
export default technosSlice.reducer
