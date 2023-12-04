import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';

export default function MediaCard() {
  return (
    <div>
      <Typography variant="h5" sx={{ textAlign: 'left', marginRight: '10%', marginTop: 2, marginBottom: 2 }}>
        Lorem ipsum Lorem ipsum
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {[1, 2, 3, 4].map((index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              maxWidth: '100%',
              margin: { xs: '5%', sm: 0 }, // Add margin on small screens
              borderRadius: [2, 2], // Two different border radii (top-left, top-right, bottom-right, bottom-left)
            }}>
              <CardContent>
                <Typography gutterBottom variant="h6" textAlign="center" component="div">
                  Lorem ipsum
                </Typography>
                <Typography variant="h6" textAlign="center">
                  Example text
                </Typography>
                <CardMedia
                  component="img"
                  height="10%"
                  image="https://images.pexels.com/photos/3635300/pexels-photo-3635300.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="green iguana"
                  sx={{ marginTop: 2, marginBottom: 2, borderRadius: 2 }}
                />
              </CardContent>
              <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  size="medium"
                  sx={{ marginBottom: "2",
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: (theme) => theme.palette.primary.dark,
                    },
                    '&.Mui-disabled': {
                      backgroundColor: (theme) => theme.palette.action.disabledBackground,
                      color: (theme) => theme.palette.action.disabled,
                    },
                  }}
                >
                  Button {index}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}




