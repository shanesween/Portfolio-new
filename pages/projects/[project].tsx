import React, { Fragment, useState } from 'react'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import { projectsConfig } from './projectConfig'
import { Box, IconButton, Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import Carousel from 'react-material-ui-carousel'
import Image from 'next/image'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
      padding: theme.spacing(3),
      justifyContent: 'center',
    },
    paperContainer: {
      width: '75%',
    },
    titleRow: {
      display: 'flex',
      flexDirection: 'row',
    },
    titleContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginRight: 48,
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
        <Box className={classes.titleRow} p={1}>
          <IconButton onClick={() => router.back()} aria-label="back">
            <ArrowBackIcon />
          </IconButton>
          <Box className={classes.titleContainer}>
            <Typography variant="h5">{current?.name}</Typography>
          </Box>
        </Box>
        <Box>
          <Carousel swipe={true} navButtonsAlwaysVisible={true}>
            {current?.imageArr?.map((i) => (
              <Fragment key={i}>
                <Paper>
                  <Image
                    src={i}
                    layout="responsive"
                    width={762}
                    height={300}
                    alt="slide"
                  />
                </Paper>
              </Fragment>
            ))}
          </Carousel>
        </Box>

        <Box p={3}>
          <Typography>{current?.descriptionLong}</Typography>
        </Box>
      </Paper>
    </Box>
  )
}

export default ProjectDetails
