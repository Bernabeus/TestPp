import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { readData } from './initFirebase';
import { render } from 'react-dom';
import { useExcelDownloder } from 'react-xls';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  textfield: {
    color: '#113163',
    background: '#fff',
    marginLeft: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#fff',
  },
  buttonEx: {
    fontSize: 13,
    fontFamily: 'Montserrat',
    backgroundColor: '#fff',
    fontWeight: 'bold',
    height: 35,
    borderRadius: 10,
    marginTop: 10,
  },
  table: {
    minWidth: 650,
    minHeight: 200,
  },
  textT: {
    fontWeight: 'bold',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
    },
  },
  text: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '2.2vw',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.8vw',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.4vw',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1vw',
    },
  },
}));

const CodText = () => {
  const classes = useStyles();
  const [dataIU, setDataIU] = useState([]);
  const [rows, setRows] = useState([]);
  const [dataS, setDataS] = useState([]);
  const [btnDisa, setBtnDisa] = useState(false);
  const { ExcelDownloder, Type } = useExcelDownloder();

  useEffect(() => {
    dataUsers();
  }, []);

  function dataUsers() {
    setDataIU(readData());
  }

  const getValue = () => {
    const inputValue = document.getElementById('textC').value;

    if (inputValue == 'SimulatorS-2022') {
      setBtnDisa(true);
    }
  };

  function createData(
    name,
    email,
    cole,
    para,
    preU,
    numE,
    numR,
    puntT,
    puntA,
    puntRL,
    puntRV,
    puntRN
  ) {
    return {
      name,
      email,
      cole,
      para,
      preU,
      numE,
      numR,
      puntT,
      puntA,
      puntRL,
      puntRV,
      puntRN,
    };
  }

  const ReadD = () => {
    const userDa = readData();

    let arreglo = Object.entries(userDa);

    var userArray = [];
    for (var i = 0; i < arreglo.length; i++) {
      userArray.push(arreglo[i][1]);
    }

    const data = {
      Data1: [],
    };

    const rowsI = [];

    const arrayNU = [];

    for (var i = 0; i < userArray.length; i++) {
      const arrayU = [
        {
          Apellidos: userArray[i].apellidos,
          Colegio: userArray[i].colegio,
          Email: userArray[i].email,
          Nombres: userArray[i].nombres,
          Paralelo: userArray[i].paralelo,
          PreUniversitario: userArray[i].preUniversitario,
          NumeroEstudiante: userArray[i].numEstudiante,
          NumeroRepresentante: userArray[i].numRepresentante,
          PuntajeAtencion: userArray[i].puntAtencion,
          PuntajeRazLogico: userArray[i].puntRazonamientoL,
          PuntajeRazNumerico: userArray[i].puntRazonamientoN,
          PuntajeRazVerbal: userArray[i].puntRazonamientoV,
          PuntajeTotal: userArray[i].puntTotal,
        },
      ];

      arrayNU.push(arrayU[0]);

      data.Data1.push(arrayNU[i]);

      const nameA = userArray[i].nombres + ' ' + userArray[i].apellidos;
      rowsI.push(
        createData(
          nameA,
          userArray[i].email,
          userArray[i].colegio,
          userArray[i].paralelo,
          userArray[i].preUniversitario,
          userArray[i].numEstudiante,
          userArray[i].numRepresentante,
          userArray[i].puntTotal,
          userArray[i].puntAtencion,
          userArray[i].puntRazonamientoL,
          userArray[i].puntRazonamientoV,
          userArray[i].puntRazonamientoN
        )
      );
    }

    setRows(rowsI);
    setDataS(data);
  };

  return (
    <div>
      <Grid>
        <Grid
          style={{
            paddingRight: 30,
            paddingLeft: 30,
            paddingBottom: 20,
          }}
        >
          <Button
            onClick={() => getValue()}
            variant="outlined"
            className={classes.button}
          >
            Ingresar código
          </Button>
          <TextField
            id="textC"
            type="password"
            className={classes.textfield}
            label=""
          />
        </Grid>
      </Grid>
      {btnDisa == true ? (
        <Grid>
          <Button
            variant="outlined"
            onClick={() => ReadD()}
            className={classes.button}
          >
            Leer datos
          </Button>
          <Grid>
            {dataS.Data1 ? (
              <Grid>
                <Grid
                  style={{
                    paddingRight: 30,
                    paddingLeft: 30,
                    paddingTop: 20,
                    paddingBottom: 20,
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Typography variant="h5" className={classes.textT}>
                              Nombre del estudiante
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Email
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Colegio
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Paralelo
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Pre-Universitario
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Número del estudiante
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Número del representante
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Resultado total
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Resultado en atención y concentración
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Resultado en razonamiento lógico
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Resultado en razonamiento verbal
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="h5" className={classes.textT}>
                              Resultado en razonamiento numérico
                            </Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                              <Typography variant="h5" className={classes.text}>
                                {row.name}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.email}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.cole}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.para}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.preU}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.numE}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.numR}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.puntT}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.puntA}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.puntRL}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.puntRV}
                              </Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography variant="h5" className={classes.text}>
                                {row.puntRN}
                              </Typography>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
                <ExcelDownloder
                  className={classes.buttonEx}
                  data={dataS}
                  filename={'UserDataS'}
                  type={Type.Button} // or type={'button'}
                >
                  DESCARGAR EL EXCEL
                </ExcelDownloder>
              </Grid>
            ) : (
              <div></div>
            )}
          </Grid>
        </Grid>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default CodText;

/*
<ExcelFile
                element={
                  <Button variant="outlined" className={classes.button}>
                    Exportar excel
                  </Button>
                }
                filename="Usuarios Test"
              >
                <ExcelSheet data={dataIU} name="Usuarios">
                  <ExcelColumn label="Apellidos" value="apellidos" />
                  <ExcelColumn label="Nombres" value="nombres" />
                  <ExcelColumn label="Colegio" value="colegio" />
                  <ExcelColumn label="Paralelo" value="paralelo" />
                  <ExcelColumn
                    label="Número del Estudiante"
                    value="numEstudiante"
                  />
                  <ExcelColumn
                    label="Número del Representante"
                    value="numRepresentante"
                  />
                  <ExcelColumn label="Email" value="email" />
                  <ExcelColumn label="Puntación Total" value="puntTotal" />
                  <ExcelColumn
                    label="Puntuación Atencion"
                    value="puntAtencion"
                  />
                  <ExcelColumn
                    label="Puntuación Razonamiento Lógico"
                    value="puntRazonamientoL"
                  />
                  <ExcelColumn
                    label="Puntuación Razonamiento Verbal"
                    value="puntRazonamientoV"
                  />
                  <ExcelColumn
                    label="Puntuación Razonamiento Numérico"
                    value="puntRazonamientoN"
                  />
                </ExcelSheet>
              </ExcelFile>

*/
