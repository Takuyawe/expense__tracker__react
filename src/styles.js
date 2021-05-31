import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      '& :nth-child(1)': {
        order: '2'
      },
      '& :nth-child(2)': {
        order: '1'
      },
      '& :nth-child(3)': {
        order: '3'
      }
    },
    
  },
}));