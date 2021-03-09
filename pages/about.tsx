import React, { Fragment, useState } from 'react'
import Container from '@material-ui/core/Container'
import {
  Avatar,
  Button,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Snackbar,
  Theme,
  Tooltip,
  Typography,
} from '@material-ui/core'
import PhonelinkRingIcon from '@material-ui/icons/PhonelinkRing'
import EmailIcon from '@material-ui/icons/Email'
import Head from 'next/head'
import MuiAlert from '@material-ui/lab/Alert';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import FileCopyIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
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

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const About = () => {
  const classes = useStyles()
  const [copied, isCopied] = useState(false)
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
                  <CopyToClipboard text={'shanep.sween@gmail.com'} onCopy={() => {
                    isCopied(true)
                    setOpen(true)
                  }}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<EmailIcon />}
                    >
                      shanep.sween@gmail.com
                  </Button>
                  </CopyToClipboard>
                </Grid>
                <Grid item>
                  <CopyToClipboard text={'773-456-9892'} onCopy={() => {
                    isCopied(true)
                    setOpen(true)
                  }}>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      startIcon={<PhonelinkRingIcon />}
                    >
                      (773) 456-9892
                  </Button>
                  </CopyToClipboard>
                  <Snackbar open={open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                    <Alert icon={<FileCopyIcon fontSize="inherit" />} severity="success">
                      Copied!
                    </Alert>
                  </Snackbar>
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
