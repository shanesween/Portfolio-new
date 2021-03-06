import React, { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Tooltip,
} from '@material-ui/core'
// import Link from '../../src/Link'
import Link from 'next/link'
import projectsConfig from '../../src/Config/projectConfig'
import CodeButton from '../../src/Components/CodeButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
  },
  mainContainer: {
    height: '100%',
  },
  cardContainer: {
    maxWidth: 344,
    margin: '3rem auto',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardRoot: {
    maxWidth: 345,
  },
  cardImage: {
    objectFit: 'contain',
  },
  description: {
    height: 44,
  },
  toolContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  codeButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
  link: {
    textDecoration: 'none',
    color: '#000'
  }
}))

const Projects = () => {
  const classes = useStyles()

  const projectCard = (project, i) => (
    <Grid container item xs={12} sm={8} md={4} key={i}>
      <Card raised className={classes.cardContainer}>
        <Link as={`${project.route}`} href="projects/[project]">
          <CardActionArea>
            <CardMedia
              component="img"
              alt={project.name}
              height="140"
              image={project.image}
              title={`${project.name} - ${project.descriptionBrief}`}
              className={classes.cardImage}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography
                className={classes.description}
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
                paragraph={true}
              >
                {project.descriptionBrief}
              </Typography>
              <Box className={classes.toolContainer}>
                {project.tools &&
                  project.tools.map((tool) => (
                    <Fragment key={tool.name}>
                      <Grid item>
                        <Tooltip title={tool.name}>
                          <Avatar
                            alt="tool"
                            variant="square"
                            sizes="lg"
                            src={tool.url}
                          />
                        </Tooltip>
                      </Grid>
                    </Fragment>
                  ))}
              </Box>
            </CardContent>
          </CardActionArea>
        </Link>
        <CodeButton project={project} />
      </Card>
    </Grid>
  )

  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {projectsConfig.map((project, i) => (
          <Fragment key={project.name}>{projectCard(project, i)}</Fragment>
        ))}
      </Grid>
    </Box>
  )
}

export default Projects
