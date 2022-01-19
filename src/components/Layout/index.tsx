import {
  Snackbar,
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  Paper,
  TextField,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { useState } from 'react';

import NelaCam from '../WebCam';

const Layout = function () {
  const [openModal, setOpenModal] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleAccept = () => {
    setAccepted(true);
    handleCloseModal();
  };

  const handleDegree = () => {
    setAccepted(false);
    handleCloseModal();
  };

  const handleCloseAlert = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setAccepted(false);
  };
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const handleSubmit = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    setOpenModal(true);
    console.log({
      cpf: data.get('cpf'),
      password: data.get('password'),
    });
  };

  return (
    <Grid container component='main' sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component='h1' variant='h5'>
            Acessar
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              margin='normal'
              required
              fullWidth
              id='cpf'
              label='CPF'
              name='cpf'
              autoComplete='cpf'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Senha'
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Lembrar me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>

          <NelaCam />
        </Box>

        <Snackbar
          open={accepted}
          autoHideDuration={6000}
          onClose={handleCloseAlert}
        >
          <Alert
            onClose={handleCloseAlert}
            severity='success'
            sx={{ width: '100%' }}
          >
            Viva!
          </Alert>
        </Snackbar>
      </Grid>

      {/* Modal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          A publicação do PWA na Google Store foi um sucesso?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Teste realizado para deploy e publicação da PWA na Google Store!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDegree}>Discordo</Button>
          <Button onClick={handleAccept} autoFocus>
            Concordo
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Layout;
