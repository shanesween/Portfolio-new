import React, { Fragment, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import {
  Avatar,
  Button,
  Chip,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core'
// import CrossfadeImage from '../src/Crossfade/index'
// import { useTransition, animated, config } from 'react-spring'
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing'
import EmailIcon from '@material-ui/icons/Email'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(2)
  },
  cardRoot: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
  image: {
    height: '100%',
    width: '100%',
    // padding: theme.spacing(2),
    borderRadius: 8
  },
  button: {
    margin: theme.spacing(1),
    '&.MuiChip-root': {
      height: 48,
      fontSize: '1rem',
      '&.MuiChip-avatar': {
        width: 40,
        height: 40
      }
    },
    '&.MuiChip-root .MuiChip-avatar': {
      width: 40,
      height: 40
    }
  },
  avatarProfile: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
  avatarIcon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  }
}))

// const images = [
//   { id: 0, url: '/portrait.jpeg' },
//   { id: 2, url: '/golf.jpeg' },
//   { id: 3, url: '/mountain.jpeg' },
//   { id: 4, url: 'beer.jpeg' },
// ]

const languageIcons = [
  { name: 'JavaScript', url: '/dev/js.svg' },
  { name: 'TypeScript', url: '/dev/typescript.svg' },
  { name: 'C# (.NET)', url: '/dev/csharp.svg' },
]

const frontEndIcons = [
  { name: 'React', url: '/dev/react.svg' },
  { name: 'Redux', url: '/dev/redux.svg' },
  { name: 'Material-UI', url: '/dev/materialui.svg' },
]

const backEndIcons = [
  { name: 'Nodejs', url: '/dev/nodejs.svg' },
  { name: 'Express', url: '/dev/express.svg' },
  { name: 'Sequelize', url: '/dev/sequelize.svg' },
  { name: '.NET', url: '/dev/dot-net.svg' }
]

const databaseIcons = [
  { name: 'PostgreSQL', url: '/dev/postgresql.svg' },
  { name: 'Firebase', url: '/dev/firebase.svg' },
  { name: 'MS SQL Server', url: '/dev/microsoftsqlserver.svg' },
]

const About = () => {
  const classes = useStyles()
  // const [index, set] = useState(0)

  // const transitions = useTransition(images[index], (item) => item.id, {
  //   from: { opacity: 0, position: 'absolute' },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 },
  //   config: config.molasses,
  // })

  // useEffect(
  //   () => void setInterval(() => set((state) => (state + 1) % 4), 10000),
  //   [set],
  // )

  return (
    <>
      <Head>
        <title>About | Software Shane</title>
      </Head>
      <Container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid container item sm={4} xs={12} justify="center" >
              <Grid item>
                <Hidden only={["xs"]}>
                  <img src="portrait.jpeg" className={classes.image} />
                </Hidden>
                <Hidden only={["xl", "lg", "md", "sm"]}>
                  <Avatar className={classes.avatarProfile} src="portrait.jpeg" />
                </Hidden>
              </Grid>
            </Grid>
            <Grid
              container
              item
              sm={8}
              justify="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h6">
                  The name is Shane. I started my software journey in 2019.
                  I completed Fullstack Academy's immersive bootcamp in
                  2020. I previously worked as a fullstack
                  developer with <a href="https://oddsshopper.awesemo.com/" target="_blank">Awesemo.com</a>. I am currently seeking roles in
                  the Los Angeles area! <br /> Want to chat? Let's do it!
                    </Typography>
              </Grid>
              <Grid container item justify="center">
                <Grid item>
                  {' '}
                  <Chip
                    avatar={<Avatar><EmailIcon /></Avatar>}
                    label="shanep.sween@gmail.com"
                    color="primary"
                    className={classes.button}
                  />

                </Grid>
                <Grid item>
                  <Chip
                    avatar={<Avatar><PhonelinkRingIcon /></Avatar>}
                    label="(773) 456-9892"
                    color="primary"
                    className={classes.button}
                  />
                </Grid>
              </Grid>
              <Grid container item justify="center" spacing={2}>
                {languageIcons.map((icon) => (
                  <Fragment key={icon.name}>
                    <Grid item>
                      <Tooltip title={icon.name}>
                        <Avatar
                          alt="icon"
                          variant="square"
                          sizes="lg"
                          src={icon.url}
                        />
                      </Tooltip>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
              <Grid container item justify="center" spacing={2}>
                {frontEndIcons.map((icon) => (
                  <Fragment key={icon.name}>
                    <Grid item>
                      <Tooltip title={icon.name}>
                        <Avatar
                          alt="icon"
                          variant="square"
                          sizes="lg"
                          src={icon.url}
                        />
                      </Tooltip>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
              <Grid container item justify="center" spacing={2}>
                {backEndIcons.map((icon) => (
                  <Fragment key={icon.name}>
                    <Grid item>
                      <Tooltip title={icon.name}>
                        <Avatar
                          alt="icon"
                          variant="square"
                          sizes="lg"
                          src={icon.url}
                        />
                      </Tooltip>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
              <Grid container item justify="center" spacing={2}>
                {databaseIcons.map((icon) => (
                  <Fragment key={icon.name}>
                    <Grid item>
                      <Tooltip title={icon.name}>
                        <Avatar
                          alt="icon"
                          variant="square"
                          sizes="lg"
                          src={icon.url}
                        />
                      </Tooltip>
                    </Grid>
                  </Fragment>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  )
}

export default About
