import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '85vh'
  }
}))

const Resume = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <iframe width="100%" height="100%" src="https://drive.google.com/file/d/1K2ErF1FDNTaq2YDS9X_P2dtAn5aDUaHW/preview"></iframe>
    </Box>
  )
}

export default Resume
