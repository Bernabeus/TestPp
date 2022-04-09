import Head from 'next/head';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import styles from '../../styles/Home.module.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/montserrat';
import BodyS from '../../components/BodyTest';
import HeaderS from '../../components/HeaderTest';

const UseStyles = makeStyles((theme) => ({
  contB: {
    // paddingTop: 100,
    backgroundColor: '#E8E8E8',
    left: 0,
    //position: 'absolute',
  },
  contH: {
    backgroundColor: '#E8E8E8',
    //position: 'absolute',
  },
  footer: {
    backgroundColor: '#183690',
    display: 'flex',
    padding: '1rem 0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    left: 0,
  },
  textT: {
    color: '#fff',
    fontFamily: 'Montserrat',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.5vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
    },
  },
  cont1: {
    textAlign: 'center',
  },
}));

const testC = () => {
  const classes = UseStyles();
  //const router = useRouter();
  //const [numId, setNumId] = useState(0);

  return (
    <div>
      <Head>
        <title>Test de Perfiles Profesionales</title>
        <meta name="description" content="Tets de Perfiles Profesionales" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <Grid className={classes.contH}>
          <HeaderS />
        </Grid>
        <Grid className={classes.contB}>
          <BodyS />
        </Grid>
      </main>

      <footer className={classes.footer}>
        <Grid item xs></Grid>
        <Grid item xs={6} className={classes.cont1}>
          <Typography variant="h6" className={classes.textT}>
            SMART CAPACITACIÓN TOTAL PRE-UNIVERSITARIO
          </Typography>
        </Grid>
        <Grid item xs></Grid>
      </footer>
    </div>
  );
};

export default testC;
