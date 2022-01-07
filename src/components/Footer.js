import {React, useState, useEffect} from 'react'
import { AppBar, Collapse, IconButton, makeStyles, Toolbar } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Link as Scroll} from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Nunito', 
        color: 'white',
    
        textShadow: '0px 0px 6px black'
    },
}))
export default function Nav() {
    const classes = useStyles();
    const [checked, setChecked] = useState()
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root}>
            <p>Copyright 2022 - Katty Technology - Todos direitos Reservados</p>
        </div>
    )
}
