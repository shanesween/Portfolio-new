import { makeStyles, Theme, createStyles } from '@material-ui/core'
import React from 'react'
import Particles from 'react-tsparticles'
import Header from '../src/Components/Header'
import particlesConfig from '../src/Config/particlesConfig'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '86vh'
    }
  }))

const Index = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Particles height="86vh" width="100vw" options={particlesConfig} />
      <Header />
    </div>
  )
}

export default Index
