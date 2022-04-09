import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import style from '../styles/Home.module.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  textT: {
    fontFamily: 'Montserrat',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'left',
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
  text: {
    fontFamily: 'Montserrat',
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.9vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.2vw',
    },
  },
  cont1: {
    backgroundColor: '#0070B8',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    display: 'flex',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderLeft: '1px solid #67778F',
    borderTop: '1px solid #67778F',
    borderRight: '1px solid #67778F',
  },
  cont2: {
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderLeft: '1px solid #67778F',
    borderBottom: '1px solid #67778F',
    borderRight: '1px solid #67778F',
  },
}));

function PageInves() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          style={{
            paddingBottom: 30,
            width: 800,
          }}
        >
          <Grid className={classes.cont1}>
            <Typography variant="h5" className={classes.textT}>
              Investigativa
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <Typography variant="h5" className={classes.text}>
              Este tipo de personalidad manifiesta interés por la búsqueda de la
              verdad y objetividad. Son personas emprendedoras, curiosas,
              persuasivas, objetivas, ambiciosas, responsables, metódicas y
              analíticas. Algunas carreras relacionadas con este tipo de
              personalidad están distribuidas en las siguientes áreas de
              estudio:
            </Typography>
            <Grid>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área Biosanitaria: Bioquímico, Farmacéutico, Médico,
                        Kinesiólogo, Licenciado en Nutrición, Odontólogo,
                        Veterinario.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área Geoastronómica: Arqueólogo, Geólogo, Licenciado en
                        Astronomía, Licenciado en Ciencias de la Atmósfera,
                        Licenciado en Geografía.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área de Ingeniería y Computación: Ingeniero en
                        Informática, Licenciado en Ciencias de la Computación,
                        Licenciado en Sistemas (informáticos), Ingeniería en
                        Sistemas, Licenciado en Ciencias Matemáticas, Ingeniería
                        Aeronáutica.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área económico-administrativa: Licenciado en Economía.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área Humanística : Licenciado en Ciencias de la
                        Educación, Licenciado en Antropología, licenciado en
                        Filosofía, Licenciado en Historia, Licenciado en Letras,
                        Licenciado en Psicología, Licenciado en Relaciones
                        Internacionales, Licenciado en Relaciones Laborales.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área Jurídico- política: Licenciado en Ciencias
                        Políticas.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área Físico-química: Licenciado en Bromatología,
                        Licenciado en Ciencias Físicas, Licenciado en Ciencias
                        Químicas.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área Bioagropecuaria: Licenciado en Ciencias Biológicas,
                        Ingeniero Agrónomo.
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <RemoveIcon style={{ fontSize: 20, fontWeight: 'bold' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="h5" className={classes.text}>
                        Área comunicacional: Licenciado en Ciencias de la
                        Comunicación.
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          style={{
            paddingBottom: 30,
            width: 800,
          }}
        >
          <Grid
            className={classes.cont1}
            style={{
              backgroundColor: '#fff',
              paddingBottom: 0,
            }}
          >
            <Typography
              variant="h5"
              className={classes.text}
              style={{ fontWeight: 'bold' }}
            >
              Características investigativas:
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <Typography variant="h5" className={classes.text}>
              Lee cada una de las siguientes opciones y decide cuál se asemeja
              más a ti. Si la opción se asemeja mucho responde con un 2 a su
              lado. Si no te identifica totalmente responde con un 1 y si no te
              describe en ningún sentido reponde con un 0.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageInves;
