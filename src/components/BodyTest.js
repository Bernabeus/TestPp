import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import style from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PagRealista from './PaginaGeneral';
import PagEmpresarial from './PaginaRespaldo';
import PageEmpre from './PageEmpre';
import PageArti from './PageArtis';
import PageInves from './PageInves';
import PageConv from './PageConv';
import PageSocia from './PageSocia';
import AreaEdu from './AreaEdu';
import {
  dataRealista,
  dataEmpresarial,
  dataArtistica,
  dataInvestigativa,
  dataConvencional,
  dataSocial,
} from './DataTest.js';
import PageReal from './PageReal';

const useStyles = makeStyles((theme) => ({
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

function BodyC() {
  const classes = useStyles();
  const [valuesR, setValuesR] = useState([]);
  const [valuesE, setValuesE] = useState([]);
  const [valuesA, setValuesA] = useState([]);
  const [valuesI, setValuesI] = useState([]);
  const [valuesC, setValuesC] = useState([]);
  const [valuesS, setValuesS] = useState([]);
  const [valuesPP, setValuesPP] = useState([]);
  const [stateComponent, setStateComponent] = useState(1);

  const sendValuesReal = (arrayData) => {
    const arrayDataRealista = dataRealista;
    if (arrayData) {
      setValuesR(arrayData);
      setStateComponent(2);
      window.scrollTo({
        top: 0,
      });
      console.log(arrayData);
    }
    return arrayDataRealista;
  };

  const sendValuesEmp = (arrayData) => {
    const arrayDataRealista = dataEmpresarial;
    if (arrayData) {
      setValuesE(arrayData);
      setStateComponent(3);
      window.scrollTo({
        top: 0,
      });
      console.log(arrayData);
    }
    return arrayDataRealista;
  };

  const sendValuesArtis = (arrayData) => {
    const arrayDataRealista = dataArtistica;
    if (arrayData) {
      setValuesA(arrayData);
      setStateComponent(4);
      window.scrollTo({
        top: 0,
      });
      console.log(arrayData);
    }
    return arrayDataRealista;
  };
  const sendValuesInves = (arrayData) => {
    const arrayDataRealista = dataInvestigativa;
    if (arrayData) {
      setValuesI(arrayData);
      setStateComponent(5);
      window.scrollTo({
        top: 0,
      });
      console.log(arrayData);
    }
    return arrayDataRealista;
  };
  const sendValuesConv = (arrayData) => {
    const arrayDataRealista = dataConvencional;
    if (arrayData) {
      setValuesC(arrayData);
      setStateComponent(6);
      window.scrollTo({
        top: 0,
      });
      console.log(arrayData);
    }
    return arrayDataRealista;
  };
  const sendValuesSoc = (arrayData) => {
    const arrayDataRealista = dataSocial;
    if (arrayData) {
      setValuesS(arrayData);
      setStateComponent(7);
      window.scrollTo({
        top: 0,
      });
      console.log(arrayData);
    }
    return arrayDataRealista;
  };

  const getCheck = (arrayData) => {
    if (arrayData) {
      setValuesPP(arrayData);
      setStateComponent(8);
      console.log(arrayData);
    }
  };

  return (
    <Grid className={style.body}>
      {stateComponent == 1 ? (
        <Grid>
          <Grid>
            <PageReal />
          </Grid>
          <Grid>
            <PagRealista sendData={sendValuesReal} />
          </Grid>
        </Grid>
      ) : stateComponent == 2 ? (
        <Grid>
          <Grid>
            <PageEmpre />
          </Grid>
          <Grid>
            <PagEmpresarial sendData={sendValuesEmp} />
          </Grid>
        </Grid>
      ) : stateComponent == 3 ? (
        <Grid>
          <Grid>
            <PageArti />
          </Grid>
          <Grid>
            <PagRealista sendData={sendValuesArtis} />
          </Grid>
        </Grid>
      ) : stateComponent == 4 ? (
        <Grid>
          <Grid>
            <PageInves />
          </Grid>
          <Grid>
            <PagEmpresarial sendData={sendValuesInves} />
          </Grid>
        </Grid>
      ) : stateComponent == 5 ? (
        <Grid>
          <Grid>
            <PageConv />
          </Grid>
          <Grid>
            <PagRealista sendData={sendValuesConv} />
          </Grid>
        </Grid>
      ) : stateComponent == 6 ? (
        <Grid>
          <Grid>
            <PageSocia />
          </Grid>
          <Grid>
            <PagEmpresarial sendData={sendValuesSoc} />
          </Grid>
        </Grid>
      ) : stateComponent == 7 ? (
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
                  Perfiles profesionales y áreas educativas.
                </Typography>
              </Grid>
              <Grid className={classes.cont2}>
                <Typography variant="h5" className={classes.text}>
                  Respode según corresponda.
                </Typography>
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
                <Typography variant="h5" className={classes.text}>
                  A continuación selecciona cuál crees que es tu perfil
                  profesional y área educativa en la que deseas desempeñarte.
                  (Puedes selecccionar más de una).
                </Typography>
              </Grid>
              <Grid className={classes.cont2}>
                <AreaEdu sendCheck={getCheck} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ) : stateComponent == 8 ? (
        <Grid></Grid>
      ) : (
        ''
      )}
    </Grid>
  );
}

export default BodyC;
