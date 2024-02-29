import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChangePassword from './auth/ChangePassword';
import { removeToken } from '../../services/LocalStorageService';
import { useDispatch } from 'react-redux';
import { unSetUserToken } from '../../features/authSlice';

const Dashboard = () => {
  const navigate = useNavigate()

  //remove access token after log out also from redux
  const dispach = useDispatch()


  const handleLogout = () => {
    console.log("Logout Clicked");
    dispach(unSetUserToken({access_token: null}))
    removeToken()
    navigate('/login')
  }
  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={4} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        <Typography variant='h5'>Email: sonam@gmail.com</Typography>
        <Typography variant='h6'>Name: Sonam</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={8}>
        <ChangePassword />
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;
