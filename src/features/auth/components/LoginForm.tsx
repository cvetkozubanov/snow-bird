import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '@/contexts';

import { LoginCredentials } from '../types';
import { SitemarkIcon } from './CustomIcons';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px'
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
  })
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: '10vh',
  '&::before': {
    content: '\'\'',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage: 'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage: 'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))'
    })
  }
}));

export const LoginForm = () => {
  const [t] = useTranslation('common');
  const { login } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);

  const initialValues: LoginCredentials = {
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    password: Yup.string().required(t('passwordRequired'))
  });

  const formik = useFormik({
    validateOnMount: false,
    validateOnChange: true,
    initialValues,
    validationSchema,
    onSubmit: (values: LoginCredentials) => {
      setSubmitting(true);
      login(values.email, values.password)?.then(() => {
        setSubmitting(false);
      });
    }
  });

  return (
    <>
      <CssBaseline enableColorScheme />
      <SignInContainer direction='column' justifyContent='space-between'>
        <Card variant='outlined'>
          <SitemarkIcon />
          <Typography
            component='h1'
            variant='h4'
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Log in
          </Typography>
          <Box
            component='form'
            onSubmit={formik.handleSubmit}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2
            }}>
            <FormControl>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <TextField
                id='email'
                name='email'
                placeholder='your@email.com'
                autoComplete='email'
                autoFocus
                required
                fullWidth
                variant='outlined'
                onChange={formik.handleChange}
                value={formik.values.email}
                sx={{ ariaLabel: 'email' }}
                error={!!formik.errors.email}
                helperText={formik.errors.email ? formik.errors.email : ''}
                color={formik.errors.email ? 'error' : 'primary'}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <FormLabel htmlFor='password'>Password</FormLabel>
              </Box>
              <TextField
                name='password'
                placeholder='••••••'
                id='password'
                autoComplete='current-password'
                required
                fullWidth
                onChange={formik.handleChange}
                value={formik.values.password}
                variant='outlined'
                error={!!formik.errors.password}
                helperText={formik.errors.password ? formik.errors.password : ''}
                color={formik.errors.password ? 'error' : 'primary'}
              />
            </FormControl>
            <Button disabled={submitting} type='submit' fullWidth variant='contained'>
              {t('login')}
            </Button>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
};
