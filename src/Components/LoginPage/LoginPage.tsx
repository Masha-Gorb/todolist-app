import React from 'react';
import s from './LoginPage.module.css'
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField/TextField';
import Paper from '@mui/material/Paper/Paper';
import Button from '@mui/material/Button/Button';
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export const LoginPage = () => {
  const navigate = useNavigate()
  const toMainPage = () => navigate("/main")
  return (
    <div className={s.login}>

      <Paper elevation={3} className={s.loginPaper}>
          <h1>LOGIN</h1>
        <Grid container justifyContent={'center'}>
          <Grid item justifyContent={'center'}>
            <FormControl>
              <FormLabel>
                <p>To log in get registered
                  <a href={'https://social-network.samuraijs.com/'}
                     target={'_blank'}> here
                  </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
              </FormLabel>
              <FormGroup>
                <TextField label="Email" margin="normal"/>
                <TextField type="password" label="Password"
                           margin="normal"
                />
                <FormControlLabel label={'Remember me'} control={<Checkbox/>}/>
                <Button type={'submit'}
                        variant={'contained'}
                        color={'secondary'}
                        onClick={toMainPage}>
                  Login
                </Button>
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}
