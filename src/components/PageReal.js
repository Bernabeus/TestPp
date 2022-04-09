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

function PageReal() {
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
              Realista
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <Typography variant="h5" className={classes.text}>
              Persona que trabaja con las manos, con herramientas, máquinas y
              cosas; persona práctica, inclinada a la mecánica y la física.
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
                        Ingeniería y profesiones afines: dibujo técnico,
                        mecánica, metalistería, electricidad, electrónica,
                        telecomunicaciones, ingeniería energética y química,
                        mantenimiento de vehículos, topografía.
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
                        Industria y producción: alimentación y bebidas,
                        textiles, confección, calzado, cuero, materiales
                        (madera, papel, plástico, vidrio, entre otros), minería
                        e industrias extractivas.
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
                        Arquitectura y construcción: arquitectura estructural,
                        arquitectura paisajística, planificación comunitaria,
                        cartografía; edificación, construcción; ingeniería
                        civil.
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
                        Agricultura: silvicultura y pesca, producción
                        agropecuaria, agronomía, ganadería, horticultura y
                        jardinería, silvicultura y técnicas forestales, parques
                        naturales, flora y fauna, ciencia y tecnología
                        pesqueras. Veterinaria y auxiliar de veterinaria.
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
                        Servicios de transporte: formación de marinos, oficiales
                        de marina, náutica, tripulación de aviones, control del
                        tráfico aéreo, transporte ferroviario, transporte por
                        carretera, servicios postales.
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
                        Servicios de seguridad: protección de personas y bienes:
                        servicios de policía y orden público, criminología,
                        prevención y extinción de incendios, seguridad civil,
                        Educación militar.
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
              Características realistas:
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

export default PageReal;
