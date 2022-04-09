import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

const PregRealista = ({ onSelectionPreg }) => {
  const classes = useStyles();
  const [data, setData] = useState('');
  const [value1, setValue1] = useState(0);
  useEffect(() => {
    newArray();
  }, []);

  function newArray() {
    var arrayData = onSelectionPreg();
    //console.log(arrayData);
    setData(arrayData);
  }

  const handleRadioChange1 = (event) => {
    setValue1(event.target.value);
    onSelectionPreg(event.target.value);
  };

  return (
    <Grid
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {data != '' ? (
        <Grid
          style={{
            paddingBottom: 30,
            width: 800,
          }}
        >
          <Grid className={classes.contT1}>
            <Typography variant="h5" className={classes.text}>
              {data.question}
            </Typography>
          </Grid>
          <Grid className={classes.cont2}>
            <RadioGroup
              value={value1}
              onChange={handleRadioChange1}
              name="customized-radios"
            >
              <FormControlLabel
                value={'2'}
                className={classes.check}
                control={<Radio />}
                label={
                  <Typography variant="h5" className={classes.textA}>
                    2
                  </Typography>
                }
              />
              <FormControlLabel
                className={classes.check}
                value={'1'}
                control={<Radio />}
                label={
                  <Typography variant="h5" className={classes.textA}>
                    1
                  </Typography>
                }
              />
              <FormControlLabel
                value={'0'}
                className={classes.check}
                control={<Radio />}
                label={
                  <Typography variant="h5" className={classes.textA}>
                    0
                  </Typography>
                }
              />
            </RadioGroup>
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </Grid>
  );
};

export default PregRealista;
