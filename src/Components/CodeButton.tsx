import { makeStyles, Box, Button } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({

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

interface Props {
    project: IProject
}

const CodeButton = (props: Props) => {
    const classes = useStyles()

    const { project } = props

    return (
        <Box className={classes.codeButton}>
            <Button variant="contained">
                <a className={classes.link} target="_blank" href={project.githubUrl.length ? project.githubUrl : project.productionUrl.length && project.productionUrl}>
                    {project.githubUrl.length ? "View Source Code" : project.productionUrl.length && "View Production App"}
                </a>
            </Button>
        </Box>
    )
}

export default CodeButton