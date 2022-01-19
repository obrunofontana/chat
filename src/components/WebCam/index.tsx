import { CameraAlt, RemoveCircleOutline } from '@mui/icons-material';
import { IconButton, Grid } from '@mui/material';
import React, { useRef, useCallback, useState } from 'react';
import Webcam from 'react-webcam';

import { Container } from './styles';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const NelaCam: React.FC = function () {
  const webcamRef = useRef<Webcam>(null);
  const [image, setImage] = useState('');

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const setImageSrc = webcamRef.current.getScreenshot();

      if (setImageSrc) {
        setImage(setImageSrc);
      }
    }
  }, [webcamRef]);

  const handleRemoveImage = () => {
    setImage('');
  };

  return (
    <Container>
      {' '}
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'start',
          }}
        >
          {image === '' ? (
            <Webcam
              audio={false}
              height={350}
              ref={webcamRef}
              screenshotFormat='image/jpeg'
              width={350}
              videoConstraints={videoConstraints}
            />
          ) : (
            <img src={image} alt='Imagem da camera' />
          )}

          {image === '' ? (
            <>
              <h5>Capturar Imagem</h5>
              <IconButton
                color='primary'
                aria-label='upload picture'
                component='span'
                onClick={(e: any) => {
                  e.preventDefault();
                  capture();
                }}
              >
                <CameraAlt />
              </IconButton>
            </>
          ) : (
            <>
              <h5>Remover Imagem</h5>
              <IconButton
                color='error'
                aria-label='upload picture'
                component='span'
                onClick={(e: any) => {
                  e.preventDefault();
                  handleRemoveImage();
                }}
              >
                <RemoveCircleOutline />
              </IconButton>
            </>
          )}
        </Grid>
      </Grid>{' '}
    </Container>
  );
};

export default NelaCam;
