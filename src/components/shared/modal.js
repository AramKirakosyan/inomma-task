import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#1F233F',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    color: '#fff',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },

  inputPaper: {
    color: '#fff',
    width: '100%',
    marginTop: '30px'
  },

  form: {
    marginTop: '20px',
  },

  desc: {
    color: '#505794',
    marginTop: '20px',
    marginBottom: '30px',
  },

  buttonsGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px',
  },

  txtAdvice: {
    margin: '10px 0 20px 10px',
    color: '#6971B2',
  }

}));

export default useStyles;