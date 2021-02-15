import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export default function Copyright() {
  return (
    <Typography gutterBottom color="secondary" variant="body2" align="center">
      {'Copyright © '}
      <MuiLink
        color="primary"
        target="_blank"
        href="https://github.com/shanesween"
      >
        Software Shane
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}
