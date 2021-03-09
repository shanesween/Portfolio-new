import React, { Fragment, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import {
  Avatar,
  Button,
  Grid,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core'
import CrossfadeImage from '../src/Crossfade/index'
import { useTransition, animated, config } from 'react-spring'
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing'
import EmailIcon from '@material-ui/icons/Email'
import Head from 'next/head'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
  },
}))

const images = [
  { id: 0, url: '/portrait.jpeg' },
  { id: 2, url: '/golf.jpeg' },
  { id: 3, url: '/mountain.jpeg' },
  { id: 4, url: 'beer.jpeg' },
]

const icons = [
  { name: 'JavaScript', url: '/dev/js.svg' },
  { name: 'TypeScript', url: '/dev/typescript.svg' },
  { name: 'React', url: '/dev/react.svg' },
  { name: 'Redux', url: '/dev/redux.svg' },
  { name: 'Nodejs', url: '/dev/nodejs.svg' },
  { name: 'Express', url: '/dev/express.svg' },
  { name: 'Sequelize', url: '/dev/sequelize.svg' },
  { name: 'PostgreSQL', url: '/dev/postgresql.svg' },
  { name: 'MS SQL Server', url: '/dev/microsoftsqlserver.svg' },
  { name: 'Firebase', url: '/dev/firebase.svg' },
  { name: 'HTML5', url: '/dev/html5.svg' },
  { name: 'Material-UI', url: '/dev/materialui.svg' },
  { name: 'C# (.NET)', url: '/dev/csharp.svg' },
]

const About = () => {
  const classes = useStyles()
  const [index, set] = useState(0)

  const transitions = useTransition(images[index], (item) => item.id, {
    from: { opacity: 0, position: 'absolute' },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })

  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 10000),
    [set],
  )

  return (
    <>
      <Head>
        <title>About | Software Shane</title>
      </Head>
      <Container className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container item xs spacing={3} direction="row">
            <Grid item xs={4}>
              <img src="portrait.jpeg" className={classes.image} />
            </Grid>
            <Grid
              item
              container
              xs={8}
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography variant="h6">
                  The name is Shane. I started my software journey in 2019.
                  I completed Fullstack Academy's immersive bootcamp in
                  2020. I previously worked as a fullstack software
                  developer with Awesemo. I am currently seeking roles in
                  the Los Angeles area! In my free time, I enjoy being
                  outdoors! Want to chat? Let's do it!
                    </Typography>
              </Grid>
              <Grid container item justify="center">
                <Grid item>
                  {' '}
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    target="_top"
                    rel="noopener noreferrer"
                    href={`mailto:shanep.sween@gmail.com`}
                    className={classes.button}
                    startIcon={<EmailIcon />}
                  >
                    shanep.sween@gmail.com
                      </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<PhonelinkRingIcon />}
                  >
                    (773) 456-9892
                      </Button>
                </Grid>
              </Grid>
              <Grid container item justify="center" spacing={2}>
                {icons.map((icon) => (
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
