export default (theme) => ({
  wrapper: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  paper: {
    height: '70%',
    width: '60%',
    display: 'inline-block',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  toolbar: {
    height: '70%',
    width: '20%',
    display: 'inline-block',
    textAlign: 'left',
    boxSizing: 'border-box',
    padding: theme.spacing.unit * 8,
    paddingTop: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
    marginLeft: '5%',
  },
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  box: {
    position: 'absolute',
    width: 40,
    height: 40,
    border: 'solid black',
    boxSizing: 'border-box',
    lineHeight: '40px',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    fontSize: 14,
  },
  active: {
    cursor: 'move',
  },
});