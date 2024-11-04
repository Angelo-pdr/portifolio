import { createSlice } from '@reduxjs/toolkit'

import javascript from '../../asserts/tecnologia/javascript.png'
import typescript from '../../asserts/tecnologia/typescript.png'
import react from '../../asserts/tecnologia/react.png'
import vue from '../../asserts/tecnologia/Vue.png'
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
      title: 'JavaScript',
      type: 'Front-end'
    },
    {
      id: 2,
      img: `${typescript}`,
      title: 'TypeScript',
      type: 'Front-end'
    },
    {
      id: 3,
      img: `${react}`,
      title: 'React',
      type: 'Front-end'
    },
    {
      id: 4,
      img: `${vue}`,
      title: 'Vue',
      type: 'Front-end'
    },
    {
      id: 7,
      img: `${mysql}`,
      title: 'Mysql',
      type: 'Database'
    },
    {
      id: 8,
      img: `${jest}`,
      title: 'Jest',
      type: 'frot-end'
    },
    {
      id: 9,
      img: `${cypress}`,
      title: 'Cypress',
      type: 'Frot-end'
    },
    {
      id: 10,
      img: `${python}`,
      title: 'Python',
      type: 'Back-end'
    },
    {
      id: 11,
      img: `${less}`,
      title: 'Less',
      type: 'Frot-end'
    },
    {
      id: 12,
      img: `${grunt}`,
      title: 'Grunt',
      type: 'Frot-end'
    },
    {
      id: 13,
      img: `${gulp}`,
      title: 'gulp',
      type: 'Frot-end'
    },
    {
      id: 14,
      img: `${sass}`,
      title: 'Sass',
      type: 'Frot-end'
    },
    {
      id: 15,
      img: `${testing}`,
      title: 'Testing Library',
      type: 'Frot-end'
    },
    {
      id: 17,
      img: `${bootstrap}`,
      title: 'Bootstrap',
      type: 'Frot-end'
    }
  ]
}

const technosSlice = createSlice({
  name: 'technologies',
  initialState,

  reducers: {}
})

export default technosSlice.reducer
