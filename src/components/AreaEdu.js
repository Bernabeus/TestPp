import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import '@fontsource/montserrat';

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
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 20,
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
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderLeft: '1px solid #67778F',
    borderBottom: '1px solid #67778F',
    borderRight: '1px solid #67778F',
  },
  check: {
    paddingLeft: 45,
  },
}));

const AreaEdu = ({ sendCheck }) => {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);
  const [value7, setValue7] = useState(0);
  const [value8, setValue8] = useState(0);
  const [value9, setValue9] = useState(0);
  const [value10, setValue10] = useState(0);
  const [value11, setValue11] = useState(0);
  const [value12, setValue12] = useState(0);
  const [value13, setValue13] = useState(0);
  const [value14, setValue14] = useState(0);
  const [valueD, setValueD] = useState(false);
  const [valueCheck, setValueCheck] = useState(true);

  const handleChange1 = () => {
    var valorE = value1;

    if (valorE == 0) {
      setValue1(1);
    } else {
      setValue1(0);
    }
    //setValue1(event.target.value);
  };

  const handleChange2 = () => {
    var valorE = value2;
    if (valorE == 0) {
      setValue2(2);
    } else {
      setValue2(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange3 = () => {
    var valorE = value3;

    if (valorE == 0) {
      setValue3(3);
    } else {
      setValue3(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange4 = () => {
    var valorE = value4;

    if (valorE == 0) {
      setValue4(4);
    } else {
      setValue4(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange5 = () => {
    var valorE = value5;

    if (valorE == 0) {
      setValue5(5);
    } else {
      setValue5(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange6 = () => {
    var valorE = value6;

    if (valorE == 0) {
      setValue6(6);
    } else {
      setValue6(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange7 = () => {
    var valorE = value7;

    if (valorE == 0) {
      setValue7(7);
    } else {
      setValue1(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange8 = () => {
    var valorE = value8;

    if (valorE == 0) {
      setValue8(8);
    } else {
      setValue8(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange9 = () => {
    var valorE = value9;

    if (valorE == 0) {
      setValue9(9);
    } else {
      setValue9(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange10 = () => {
    var valorE = value10;

    if (valorE == 0) {
      setValue10(10);
    } else {
      setValue10(0);
    }
    //setValue1(event.target.value);
  };

  const handleChange11 = () => {
    var valorE = value11;

    if (valorE == 0) {
      setValue11(11);
    } else {
      setValue11(0);
    }
    //setValue1(event.target.value);
  };

  const handleChange12 = () => {
    var valorE = value12;

    if (valorE == 0) {
      setValue12(12);
    } else {
      setValue12(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange13 = () => {
    var valorE = value13;

    if (valorE == 0) {
      setValue13(13);
    } else {
      setValue13(0);
    }
    //setValue1(event.target.value);
  };
  const handleChange14 = () => {
    var valorE = value14;

    if (valorE == 0) {
      setValue14(14);
    } else {
      setValue14(0);
    }
    //setValue1(event.target.value);
  };

  const getChange = () => {
    //const inputValue = document.getElementById('textC').value;
    const valorE = valueCheck;
    if (valorE == true) {
      setValueD(true);
      setValueCheck(false);
    } else {
      setValueD(false);
      setValueCheck(true);
    }
  };

  const getValuesSelect = () => {
    const arrayData = [];
    arrayData.push(value1);
    arrayData.push(value2);
    arrayData.push(value3);
    arrayData.push(value4);
    arrayData.push(value5);
    arrayData.push(value6);
    arrayData.push(value7);
    arrayData.push(value8);
    arrayData.push(value9);
    arrayData.push(value10);
    arrayData.push(value11);
    arrayData.push(value12);
    arrayData.push(value13);
    arrayData.push(value14);
    var inputValue = '';
    if (valueD != false) {
      inputValue = document.getElementById('textC').value;
      arrayData.push(inputValue);
    } else {
      arrayData.push(0);
    }
    sendCheck(arrayData);
  };

  return (
    <Grid
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange1()} value={value1} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil empresarial - social e inclinación hacia el área
                  administrativa, comercio y mercadotecnia.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange2()} value={value2} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil realista - investigativo e inclinación hacia el área
                  agropecuaria y selvicultura.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange3()} value={value3} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil realista - artístico e inclinación hacia el área
                  arquitectónica y construcción.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange4()} value={value4} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil artístico inclinado hacia las artes.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange5()} value={value5} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil investigativo e inclinación hacia las Ciencias
                  biológicas o biosanitarias.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange6()} value={value6} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil social e inclinación hacia las Ciencias de la
                  educación.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange7()} value={value7} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil investigativo e inclinación hacia las Ciencias de la
                  tierra.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange8()} value={value8} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil social e inclinación hacia las Ciencias del
                  comportamiento.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange9()} value={value9} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil social - convencional e inclinación a la
                  jurisprudencia.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange10()} value={value10} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil social e inclinación a las Humanidades.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange11()} value={value11} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil realista e inclinación hacia Industria y producción.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange12()} value={value12} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil realista e inclinación hacia las Ingenierías.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange13()} value={value13} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil social e inclinación a la Literatura e idiomas.
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => handleChange14()} value={value14} />
              }
              label={
                <Typography variant="h5" className={classes.text}>
                  Perfil realista e inclinación a las Tecnologías de la
                  información y comunicación.
                </Typography>
              }
            />
            <FormControlLabel
              control={<Checkbox onClick={() => getChange()} />}
              label={
                <Typography variant="h5" className={classes.text}>
                  Otros:
                </Typography>
              }
            />
            {valueD == true ? (
              <Input id="textC" className={classes.textfield} />
            ) : (
              ''
            )}
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid style={{ paddingBottom: 30, textAlign: 'center', paddingTop: 30 }}>
        <Button
          variant="outlined"
          onClick={() => getValuesSelect()}
          style={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#000',
            backgroundColor: '#fff',
            border: '2px solid #000',
          }}
        >
          VER RESULTADOS
        </Button>
      </Grid>
    </Grid>
  );
};

export default AreaEdu;
