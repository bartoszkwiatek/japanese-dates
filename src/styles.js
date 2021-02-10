import { makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  fill: {
    width: '100%',
  },
  name: {
    fontSize: '1.6rem',
  },
  label: {
    fontSize: '1.2rem',
  },
  weight: {
    fontWeight: 100,
  },
  header: {
    paddingTop: '1.5rem',
    fontSize: '1.2rem'
  },
  pinkColor: {
    color: 'hotpink'
  },
  correct: {
    backgroundColor: '#4caf50',
    color: 'white'
  },
  wrong: {
    backgroundColor: '#ab003c',
    color: 'white'


  }

}));

export { styles }