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
        height: '100vh',
        textShadow: '0px 0px 6px black'
    },
    Bar:{
        background: 'none'
    },
    icon:{
        color: '#fff',
        fontSize: '2rem'
    },
    title:{
        flexGrow: '1',
    },
    toolbar:{
        width: "80%",
        margin: '0 auto'
    },
    brasil:{
        color: "#5AFF3D",
    },
    subtitle:{
        color: '#fff',
        fontSize: '3rem'
    },
    container:{
        textAlign: 'center',
    },
    setaBaixo:{
        color: '#5AFF3D',
        fontSize: '4rem',
    }
}))
export default function Nav() {
    const classes = useStyles();
    const [checked, setChecked] = useState()
    useEffect(() => {
        setChecked(true);
    }, [])

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.Bar} elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <h1 className={classes.title}>Beleza <span className={classes.brasil}>Brasileira</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>               
            </AppBar>

           <Collapse
            in={checked} 
           {...(checked ? {timeout: 1000} : {})}
           collapsedSize={50}
           >
           <div className={classes.container}>
                <h1 className={classes.subtitle}>
                    Conheça a <br></br>
                    Beleza <span className={classes.brasil}>
                    Brasileira</span> 
                </h1>
                <Scroll to="Locais" smooth={true}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.setaBaixo}/>
                    </IconButton>
                </Scroll>
            </div>
            
            </Collapse>
        </div>
    )
}
