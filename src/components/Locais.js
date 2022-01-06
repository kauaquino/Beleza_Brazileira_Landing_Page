import React from 'react'
import { makeStyles } from '@material-ui/core'
import Local from './Local'
import rj from '../assets/img/Cristo.jpg'
import av from '../assets/img/Paulista.jpg'
import ig from '../assets/img/iguaracu.jpg'
import useWindowPosition from '../hook/useWindowPosition'

const useStyles = makeStyles((theme) =>({
root:{
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("md")]:{
        flexDirection: 'column'
    }
}
}))

export default function Locais() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="Locais">
            <Local titulo="São Paulo" desc="Garganta seca" img={av} checked={checked}/>
            <Local titulo="IgUaraçu" desc="Luiza mora aqui" img={ig} checked={checked}/>
        </div>
    )
}
