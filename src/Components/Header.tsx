import React from 'react'
import {
  makeStyles,
  Theme,
  createStyles,
  Avatar,
  Box,
  Grid,
  Typography,
} from '@material-ui/core'
import Typed from 'react-typed'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
      '& .MuiAvatar-img': {
        objectFit: 'contain',
      },
    },
    title: {
      color: theme.palette.primary.main,
    },
    subtitle: {
      color: theme.palette.secondary.main,
      textTransform: 'uppercase',
    },
    typedContainer: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      textAlign: 'center',
      zIndex: 1,
    },
  }),
)
const Header = () => {
  const classes = useStyles()

  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src="/beard.png" alt="avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={['Shane Sweeney']} typeSpeed={40} />
      </Typography>
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            'Full Stack Developer',
            'Native Developer',
            'Burrito Enthusiast',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
  )
}

export default Header
