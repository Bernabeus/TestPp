import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import style from '../styles/Home.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/router';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const schema = yup.object().shape({
  apellido: yup.string().required('Este campo es obligatorio.'),
  nombre: yup.string().required('Este campo es obligatorio.'),
  colegio: yup.string().required('Este campo es obligatorio.'),
  paralelo: yup
    .string()
    .max(1, 'Solo se debe escribir una letra en mayúscula.')
    .required('Este campo es obligatorio.'),
  numEstudiante: yup
    .string()
    .max(10, 'Solo se puede ingresar un número valido.')
    .required('Este campo es obligatorio.'),
  numRepresentante: yup
    .string()
    .max(10, 'Solo se puede ingresar un número valido.')
    .required('Este campo es obligatorio.'),
  carrerasMa: yup.string().required('Este campo es obligatorio.'),
  carrerasMe: yup.string().required('Este campo es obligatorio.'),
  profMadre: yup.string().required('Este campo es obligatorio.'),
  profPadre: yup.string().required('Este campo es obligatorio.'),
});

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#183690',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: '0px 0px 6px 0px',
    zIndex: 3,
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#fff',
    fontWeight: '600',
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
    },
  },
  textT: {
    fontFamily: 'Montserrat',
    color: '#183690',
    fontWeight: 'bold',
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      fontSize: '3vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3vw',
    },
    paddingLeft: 30,
  },
  cont1: {
    textAlign: 'center',
  },
  textfield: {
    color: '#113163',
    background: '#fff',
    width: '80%',
    height: 40,
  },
  button: {
    backgroundColor: '#183690',
    color: '#fff',
  },
  contPreg: {
    padding: 30,
  },
  radio: {
    paddingLeft: 20,
  },
}));

function BodyC() {
  const classes = useStyles();
  const [result, setResult] = useState('');
  const [dataIU, setDataIU] = useState([]);
  const router = useRouter();
  const [helperText, setHelperText] = React.useState('Choose wisely');
  const [value, setValue] = useState('');
  const [valueCurso, setValueCurso] = useState('');
  const [nivelMadre, setNivelMadre] = useState('');
  const [nivelPadre, setNivelPadre] = useState('');

  const [errorsList, setErrorsList] = useState([]);
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData) => {
    try {
      const userData = {
        ...formData,
      };
      var ap = userData['apellido'];
      ap = ap.toUpperCase();
      userData['apellido'] = ap;
      var no = userData['nombre'];
      no = no.toUpperCase();
      userData['nombre'] = no;
      var par = userData['paralelo'];
      par = par.toUpperCase();
      userData['paralelo'] = par;
      var arrayUserData = JSON.stringify(userData);

      if (value && valueCurso && nivelMadre && nivelPadre) {
        userData['curso'] = valueCurso;
        userData['nivelMadre'] = nivelMadre;
        userData['nivelPadre'] = nivelPadre;
        userData['preU'] = value;

        router.push({
          pathname: '/test',
          query: { dataUser: arrayUserData },
        });
      } else {
        window.alert('Conteste todas las preguntas');
      }
    } catch (e) {
      const { response } = e;
      setResult('Ocurrió un error :(');
      if (response) {
        if (response.data.errors) {
          const errors = response.data.errors;
          const newErrorList = [];
          for (let field in errors) {
            newErrorList.push(...errors[field]);
          }
          setErrorsList(newErrorList);
        }
      }
    }
  };

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleRadioCurso = (event) => {
    setValueCurso(event.target.value);
  };

  const handleRadioMadre = (event) => {
    setNivelMadre(event.target.value);
  };

  const handleRadioPadre = (event) => {
    setNivelPadre(event.target.value);
  };

  return (
    <Grid className={style.body}>
      <Grid style={{ display: 'flex' }}>
        <Grid item xs></Grid>
        <Grid
          item
          xs={8}
          style={{
            border: '2px solid',
            paddingBottom: 30,
            backgroundColor: '#fff',
          }}
        >
          <Grid
            style={{
              paddingTop: 30,
              paddingLeft: 40,
              paddingRight: 40,
              paddingBottom: 30,
              backgroundColor: '#183690',
            }}
          >
            <Typography variant="h5" className={classes.text}>
              Mediante este test podrás evaluar cuál es tu perfil profesional y
              cuál es la carrera idónea para asegurar tu futuro profesional y
              personal mediante herramientas que miden tus habilidades
              profesionales y emocionales.
            </Typography>
          </Grid>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              style={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20 }}
            >
              <Grid item={true}>
                <Grid
                  style={{ paddingBottom: 15, paddingTop: 30, paddingLeft: 20 }}
                >
                  <Typography variant="h5" className={classes.textT}>
                    Apellidos:
                  </Typography>
                </Grid>
                <Controller
                  name="apellido"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.apellido?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Nombres:
                  </Typography>
                </Grid>
                <Controller
                  name="nombre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.nombre?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Colegio:
                  </Typography>
                </Grid>
                <Controller
                  name="colegio"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.colegio?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Curso:
                  </Typography>
                </Grid>
                <Controller
                  name="curso"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup
                      defaultValue=""
                      style={{
                        paddingLeft: 60,
                        paddingBottom: 10,
                      }}
                      value={valueCurso}
                      onChange={handleRadioCurso}
                      name="customized-radios"
                    >
                      <FormControlLabel
                        {...field}
                        value={`Segundo`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Segundo
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Tercero`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Tercero
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>

              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Paralelo (INGRESA SOLO UNA LETRA MAYÚSCULA):
                  </Typography>
                </Grid>
                <Controller
                  name="paralelo"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.paralelo?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Número de celular(personal):
                  </Typography>
                </Grid>
                <Controller
                  name="numEstudiante"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="number"
                      className={classes.textfield}
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.numEstudiante?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Número de celular(representante):
                  </Typography>
                </Grid>
                <Controller
                  name="numRepresentante"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      type="number"
                      label=""
                      size="small"
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.numRepresentante?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Cuáles son tus tres profesiones de mayor preferencia?
                    Escríbelas en orden de preferencia (Las profesiones deben
                    estar separadas por una coma):
                  </Typography>
                </Grid>
                <Controller
                  name="carrerasMa"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.carrerasMa?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Cuáles son tus tres profesiones de menor preferencia?
                    Escríbelas en orden (Las profesiones deben estar separadas
                    por una coma):
                  </Typography>
                </Grid>
                <Controller
                  name="carrerasMe"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.carrerasMe?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Cuál es el nivel de estudios de tu madre o cuidadora
                    principal?
                  </Typography>
                </Grid>
                <Controller
                  name="nivelMadre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup
                      defaultValue=""
                      style={{ paddingLeft: 60, paddingBottom: 10 }}
                      value={nivelMadre}
                      onChange={handleRadioMadre}
                      name="customized-radios"
                    >
                      <FormControlLabel
                        {...field}
                        value={`No lo sé`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            No lo sé
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Educación Básica`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Educación Básica
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Bachillerato`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Bachillerato
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Tercer nivel (tecnología, licenciatura o ingeniería)`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Tercer nivel (tecnología, licenciatura o ingeniería)
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Cuarto nivel (maestría, doctorado, post-doctorado)`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Cuarto nivel (maestría, doctorado, post-doctorado)
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Qué profesión ejerce tu madre o cuidadora principal?
                  </Typography>
                </Grid>
                <Controller
                  name="profMadre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.profMadre?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Cuál es el nivel de estudios de tu padre o cuidador
                    principal?
                  </Typography>
                </Grid>
                <Controller
                  name="nivelPadre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup
                      defaultValue=""
                      style={{ paddingLeft: 60, paddingBottom: 10 }}
                      value={nivelPadre}
                      onChange={handleRadioPadre}
                      name="customized-radios"
                    >
                      <FormControlLabel
                        {...field}
                        className={classes.radio}
                        value={`No lo sé`}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            No lo sé
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Educación Básica`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Educación Básica
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Bachillerato`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Bachillerato
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Tercer nivel (tecnología, licenciatura o ingeniería)`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Tercer nivel (tecnología, licenciatura o ingeniería)
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`Cuarto nivel (maestría, doctorado, post-doctorado)`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Cuarto nivel (maestría, doctorado, post-doctorado)
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    ¿Qué profesión ejerce tu padre o cuidador principal?
                  </Typography>
                </Grid>
                <Controller
                  name="profPadre"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.profPadre?.message}
                </p>
              </Grid>
              <Grid item={true}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Te encuentras preparándote para el examen de competencias y
                    habilidades (TRANSFORMAR):
                  </Typography>
                </Grid>
                <Controller
                  name="preU"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <RadioGroup
                      defaultValue=""
                      style={{ paddingLeft: 60, paddingBottom: 10 }}
                      value={value}
                      onChange={handleRadioChange}
                      name="customized-radios"
                    >
                      <FormControlLabel
                        {...field}
                        value={`Si`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            Si
                          </Typography>
                        }
                      />
                      <FormControlLabel
                        {...field}
                        value={`No`}
                        className={classes.radio}
                        control={<Radio />}
                        label={
                          <Typography variant="h5" className={classes.textT}>
                            No
                          </Typography>
                        }
                      />
                    </RadioGroup>
                  )}
                />
              </Grid>

              <p style={{ color: '#fff' }}>{result}</p>

              {errorsList.length > 0 && (
                <ul>
                  {errorsList.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
              <Grid style={{ paddingBottom: 30, paddingTop: 30 }}>
                <Button
                  type="submit"
                  variant="outlined"
                  className={classes.button}
                >
                  Empezar el test
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </Grid>
  );
}

export default BodyC;
/*
 <Grid item={true} style={{ paddingBottom: 15 }}>
                <Grid className={classes.contPreg}>
                  <Typography variant="h5" className={classes.textT}>
                    Correro electrónico:
                  </Typography>
                </Grid>
                <Controller
                  name="email"
                  control={control}
                  className={classes.controller}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className={classes.textfield}
                      type="email"
                      size="small"
                      label=""
                      variant="filled"
                    />
                  )}
                />
                <p style={{ color: '#fff000', fontWeight: '600' }}>
                  {errors.email?.message}
                </p>
              </Grid>
*/
