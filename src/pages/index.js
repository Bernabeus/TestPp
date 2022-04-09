import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import logoH from '../../public/images/logoHB.png';
import Image from 'next/image';
import '@fontsource/montserrat';
import Header from '../components/HeaderPrin';
import Body from '../components/BodyPrin';

const useStyles = makeStyles((theme) => ({
  contB: {
    left: 0,
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
  cont1: {
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Montserrat',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.4vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1vw',
    },
    textAlign: 'right',
  },
  textT: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.6vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5vw',
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Test de Perfiles Profesionales</title>
        <meta name="description" content="Tets de Perfiles Profesionales" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <main className={styles.main}>
        <Grid className={classes.contH}>
          <Header />
        </Grid>
        <Grid className={classes.contB}>
          <Body />
        </Grid>
      </main>

      <footer className={classes.footer}>
        <Grid item xs className={classes.cont1}>
          <Image src={logoH} height={100} width={130} />
        </Grid>
        <Grid item xs={6} className={classes.cont1}>
          <Typography variant="h6" className={classes.textT}>
            SMART <br />
            CAPACITACIÓN TOTAL <br />
            PRE-UNIVERSITARIO
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ paddingRight: 10 }}>
          <Grid>
            <Typography variant="h6" className={classes.text}>
              Matriz Quito: Javier Ascazubi E3-20 y 9 de Octubre. Edificio Unión
              Nacional de Educadores.
            </Typography>
          </Grid>
          <Grid>
            <Typography variant="h6" className={classes.text}>
              0961250485 <br />
              0993338800 <br />
              0999781473
            </Typography>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}
