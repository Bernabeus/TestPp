import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import logoH from '../../public/images/logoHB.png';
import '@fontsource/montserrat';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#183690',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: '0px 0px 6px 0px',
    zIndex: 3,
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#fff',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5vw',
    },
  },
  cont1: {
    textAlign: 'center',
  },
  cont2: {
    textAlign: 'center',
  },
}));

export default function HeaderC() {
  const classes = useStyles();

  return (
    <Grid className={classes.header}>
      <Grid item xs className={classes.cont1}>
        <Image src={logoH} height={100} width={130} />
      </Grid>
      <Grid item xs={8} className={classes.cont2}>
        <Typography variant="h5" className={classes.text}>
          TEST VOCACIONAL <br /> TRANSFORMAR <br /> TEST DE PERFILES
          PROFESIONALES
        </Typography>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}
