import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '-10px',
  },
  button: {
    marginTop: '20px',
  },
  grid: {
    [theme.breakpoints.down('sm')]: {
      '& :nth-child(1)': {
        order: '1'
      },
      '& :nth-child(2)': {
        order: '2'
      },
      '& :nth-child(3)': {
        order: '3'
      },
      '& :nth-child(4)': {
        order: '4'
      },
      '& :nth-child(5)': {
        order: '5'
      },
      '& :nth-child(6)': {
        order: '6'
      }

    }
  }
}));