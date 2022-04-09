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
    backgroundColor: '#bf00ff',
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

function PageSocia() {
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
              Social
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <Typography variant="h5" className={classes.text}>
              Este tipo de personalidad manifiesta interés por la empatía
              (sentir con el otro), la comunicación efectiva, el liderazgo y el
              trabajo en grupo, la precisión verbal, el interés por el hombre,
              su asistencia, cura y rehabilitación y la capacidad de relacionar
              hechos. Son personas solidarias, serviciales, observadoras,
              estables emocionalmente, conciliadoras, persuasivas, imaginativas,
              analíticas, justicieras, comprensivas, sagaces y altruistas.
              Algunas carreras relacionadas con este tipo de personalidad:
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
                        Medicina
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
                        Enfermería
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
                        Psicología
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
                        Trabajo Social
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
                        Lengua Extranjera
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
                        Ciencias de la Educación
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
                        Terapia Ocupacional
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
                        Sistemas de Información
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
                        Periodismo
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
                        Educación comercial y administración
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
                        Servicios personales.
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
              Características sociales:
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

export default PageSocia;
