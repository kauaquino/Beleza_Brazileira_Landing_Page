import React from 'react'
import { makeStyles } from '@material-ui/core'
import Local from './Local'
import Estados from '../Data/Estados'
import useWindowPosition from '../hook/useWindowPosition'


const useStyles = makeStyles((theme) =>({
root:{
    minHeight: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
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
            {Estados.map((estadoObj, index) =>{
                index++
                return (
                    <Local estado={estadoObj} key={index} checked={checked}/>
                )
            })}
        </div>
    )
}
