import React from 'react'
import { Box, Container, Typography, Stack, Button } from '@mui/material';

const MainPage = () => {
  return (
    <main>
    {/* Hero unit */}
    <Box style={{height: '80vh'}}
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Start Blogging
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
        We believe in the power of words to inspire, educate, and connect. Whether you're a seasoned writer or just getting started, .ateM is the canvas for your thoughts, stories, and experiences...
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button href='signup' variant="contained">Start Blogging</Button>
          <Button href='login' variant="outlined">Login Now</Button>
        </Stack>
      </Container>
    </Box>

  </main>
  )
}

export default MainPage