import React, { useState } from 'react'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import { projectsConfig } from './projectConfig'
import { Box, IconButton, Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      height: '90vh',
      padding: theme.spacing(3),
    },
    paperContainer: {
      width: '100%',
    },
  }),
)

const ProjectDetails = () => {
  const classes = useStyles()
  const router = useRouter()

  const current = projectsConfig.find((p) => p.route === router.asPath)

  return (
    <Box component="div" className={classes.root}>
      <Paper className={classes.paperContainer}>
        <Box>
          <IconButton onClick={() => router.back()} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
        </Box>

        <Box>
          <Typography>{current.name}</Typography>
        </Box>

        <Box>
          <Typography>{current.descriptionLong}</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default ProjectDetails
