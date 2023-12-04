import React from 'react';
import { TextField, Button, Typography, Grid, Container } from '@mui/material';

const Subscribe = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ paddingBottom: '16px' }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Subscribe to Our Newsletter
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} container spacing={2} alignItems="flex-start" justifyContent="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Email Address"
              variant="outlined"
              required
              style={{ marginBottom: '16px' }}
            />
          </Grid>
          <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Subscribe;



