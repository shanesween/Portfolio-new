import { makeStyles, Theme, createStyles } from '@material-ui/core'
import React from 'react'
import Particles from 'react-tsparticles'
import Header from '../src/Components/Header'
import particlesConfig from '../src/Config/particlesConfig'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       height: '90vh'
//     }
//   }))

const Index = () => {
  // const classes = useStyles()

  return (
    <>
      <Particles options={particlesConfig} />
      <Header />
    </>
  )
}

export default Index
