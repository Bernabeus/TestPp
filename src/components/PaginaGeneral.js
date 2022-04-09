import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PregRealista from './Preguntas.js';
import '@fontsource/montserrat';
import { Send } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  text: {
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    // color: "#fff",
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
  textA: {
    paddingRight: 25,
    fontFamily: 'Montserrat',
    // fontWeight: "600",
    // color: "#fff",
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
  contT1: {
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    borderLeft: '2px solid #67778F',
    borderTop: '2px solid #67778F',
    borderRight: '2px solid #67778F',
  },
}));

const PagRealista = ({ sendData }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  useEffect(() => {
    getDataValues();
  }, []);

  function getDataValues() {
    const dataA = sendData();
    setData(dataA);
  }

  function newArray(val) {
    let arrayN = [];
    arrayN.push(data[val]);
    return arrayN;
  }

  const handleChangeValue1 = (valor) => {
    var arrayD = newArray(0);
    if (valor != null) {
      setValue1(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue2 = (valor) => {
    var arrayD = newArray(1);
    if (valor != null) {
      setValue2(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue3 = (valor) => {
    var arrayD = newArray(2);
    if (valor != null) {
      setValue3(valor);
    }
    return arrayD[0];
  };

  const handleChangeValue4 = (valor) => {
    var arrayD = newArray(3);
    if (valor != null) {
      setValue4(valor);
    }
    return arrayD[0];
  };

  const getValues = () => {
    const arrayData = [];
    arrayData.push(value1);
    arrayData.push(value2);
    arrayData.push(value3);
    arrayData.push(value4);
    const posFalt = arrayData.filter((element) => element);

    if (posFalt.length != 4) {
      window.alert('Responda todas las preguntas');
    } else {
      sendData(arrayData);
    }
  };

  return (
    <Grid>
      {data.length == 4 ? (
        <Grid>
          <Grid>
            <PregRealista onSelectionPreg={handleChangeValue1} />
          </Grid>
          <Grid>
            <PregRealista onSelectionPreg={handleChangeValue2} />
          </Grid>
          <Grid>
            <PregRealista onSelectionPreg={handleChangeValue3} />
          </Grid>
          <Grid>
            <PregRealista onSelectionPreg={handleChangeValue4} />
          </Grid>
          <Grid style={{ paddingBottom: 30, textAlign: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => getValues()}
              style={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#000',
                backgroundColor: '#fff',
                border: '2px solid #000',
              }}
            >
              SIGUIENTE
            </Button>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </Grid>
  );
};

export default PagRealista;
