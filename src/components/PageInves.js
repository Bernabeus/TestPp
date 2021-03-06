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
              Este tipo de personalidad manifiesta inter??s por la b??squeda de la
              verdad y objetividad. Son personas emprendedoras, curiosas,
              persuasivas, objetivas, ambiciosas, responsables, met??dicas y
              anal??ticas. Algunas carreras relacionadas con este tipo de
              personalidad est??n distribuidas en las siguientes ??reas de
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
                        ??rea Biosanitaria: Bioqu??mico, Farmac??utico, M??dico,
                        Kinesi??logo, Licenciado en Nutrici??n, Odont??logo,
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
                        ??rea Geoastron??mica: Arque??logo, Ge??logo, Licenciado en
                        Astronom??a, Licenciado en Ciencias de la Atm??sfera,
                        Licenciado en Geograf??a.
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
                        ??rea de Ingenier??a y Computaci??n: Ingeniero en
                        Inform??tica, Licenciado en Ciencias de la Computaci??n,
                        Licenciado en Sistemas (inform??ticos), Ingenier??a en
                        Sistemas, Licenciado en Ciencias Matem??ticas, Ingenier??a
                        Aeron??utica.
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
                        ??rea econ??mico-administrativa: Licenciado en Econom??a.
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
                        ??rea Human??stica : Licenciado en Ciencias de la
                        Educaci??n, Licenciado en Antropolog??a, licenciado en
                        Filosof??a, Licenciado en Historia, Licenciado en Letras,
                        Licenciado en Psicolog??a, Licenciado en Relaciones
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
                        ??rea Jur??dico- pol??tica: Licenciado en Ciencias
                        Pol??ticas.
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
                        ??rea F??sico-qu??mica: Licenciado en Bromatolog??a,
                        Licenciado en Ciencias F??sicas, Licenciado en Ciencias
                        Qu??micas.
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
                        ??rea Bioagropecuaria: Licenciado en Ciencias Biol??gicas,
                        Ingeniero Agr??nomo.
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
                        ??rea comunicacional: Licenciado en Ciencias de la
                        Comunicaci??n.
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
              Caracter??sticas investigativas:
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <Typography variant="h5" className={classes.text}>
              Lee cada una de las siguientes opciones y decide cu??l se asemeja
              m??s a ti. Si la opci??n se asemeja mucho responde con un 2 a su
              lado. Si no te identifica totalmente responde con un 1 y si no te
              describe en ning??n sentido reponde con un 0.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageInves;
