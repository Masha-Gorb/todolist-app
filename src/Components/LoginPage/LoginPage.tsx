import React from 'react';
import s from './LoginPage.module.css'
import TextField from '@mui/material/TextField/TextField';
import Paper from '@mui/material/Paper/Paper';
import Button from '@mui/material/Button/Button';
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {useFormik} from "formik";

type FormikErrorType = {
  email?: string
  password?: string
  rememberMe?: boolean
}


export const LoginPage = () => {


  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validate: (values) => {
      const errors: FormikErrorType = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 4) {
        errors.password = 'Must be 4 characters or more';
      }
      return errors;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      formik.resetForm()
    },
  });

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
              <form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <TextField label="Email"
                             margin="normal"
                             {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                  <TextField type="password"
                             label="Password"
                             margin="normal"
                             {...formik.getFieldProps('password')}
                  />
                  {formik.touched.password && formik.errors.password ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

                  <FormControlLabel label={'Remember me'}
                                    control={<Checkbox
                                      name="rememberMe"
                                      onChange={formik.handleChange}
                                      checked={formik.values.rememberMe}
                                    />}

                  />
                  <Button type={'submit'}
                          variant={'contained'}
                          color={'secondary'}>
                    Login
                  </Button>
                </FormGroup>
              </form>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>

    </div>
  )
}
