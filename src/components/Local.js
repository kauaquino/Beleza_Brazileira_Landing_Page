import React from 'react'
import { Collapse, makeStyles } from '@material-ui/core'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const useStyles = makeStyles((theme) =>({
root:{
    maxWidth: '300px !important',
    minWidth: '300px !important',
    minHeigth: '300px !important',
    maxHeigth: '300px !important',
    background: "rgba(0,0,0,0.5) !important",
    margin: '20px',
},
media: {
    height: '440px !important'
},
title:{
    fontFamily: 'Nunito !important',
    fontWeight: '900 !important',
    fontSize: '2rem !important',
    color: '#fff'
},
descricao:{
    fontFamily: 'Nunito !important',
    fontSize: '1.1rem !important',
    color: '#ddd !important'
}
}))


export default function Local(props) {
    const classes = useStyles();
    return (
        <Collapse in={props.checked} 
         {...(props.checked ? {timeout: 1000} : {})}
         collapsedSize={25}>
        <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    component="img"
                    image={props.img}
                    alt={props.titulo}
                />
                <CardContent>
                    <Typography 
                    gutterBottom
                    variant="h5" 
                    component="h1"
                    className={classes.title} >

                    {props.titulo}
                    </Typography>
                    <Typography 
                    variant="body2"
                    color="textSecondary"
                    component="p" 
                    className={classes.descricao}>
                        {props.desc}
                    </Typography>
                </CardContent>
            </Card>
        </Collapse>    
    )
}
