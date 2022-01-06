import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import bg from './assets/img/bg.jpg'
import { CssBaseline } from '@material-ui/core';
import Nav from './components/Nav';
import Locais from './components/Locais'

const useStyles = makeStyles((theme) => ({
  container:{
    minHeight: '100vh',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CssBaseline/>
      <Nav/>
      <Locais/>
    </div>
  );
}

export default App;
