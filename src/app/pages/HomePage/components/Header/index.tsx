import { makeStyles, Toolbar } from '@material-ui/core';

const useStyles = makeStyles({
  logo: {
    height: 50,
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Toolbar disableGutters>
        <img src={'img/qantas-logo.png'} alt="logo" className={classes.logo} />
      </Toolbar>
    </>
  );
};
