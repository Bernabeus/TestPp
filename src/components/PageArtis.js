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
    backgroundColor: '#fcbd00',
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

function PageArti() {
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
              Artística
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <Typography variant="h5" className={classes.text}>
              Este tipo de personalidad manifiesta interés por lo estético, el
              diseño, lo visual, lo práctico, lo manual y lo armónico. Poseen
              facilidad para imaginar y tienen memoria visual. Son personas
              perceptivas, detallistas, creativas, imaginativas, intuitivas,
              sensibles, innovadoras, pacientes y espontáneas. Algunas carreras
              relacionadas con este tipo de personalidad son:
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
                        Arquitectura
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
                        Diseño Gráfico
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
                        Diseño de Interiores
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
                        Diseño de Indumentaria
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
                        Diseño Industrial
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
                        Diseño Textil
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
                        Licenciado en Artes Plásticas
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
                        Música
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
                        Licenciado en Teatro,
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
                        Profesorado de canto, entre otros.
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
              Características artísticas:
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

export default PageArti;
