import { Link as RouterLink } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

import { randomCoverImage, demoEventSlug } from '../../config'

const Home = () => {

  return (
    <div>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${randomCoverImage})`,
        }}
      >
        {<img style={{ display: 'none' }} src={randomCoverImage}/>}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                px: 20,
                pr: { md: 0 },
                py: 30,
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={4}
                justifyContent='space-evenly'
              >
                <Typography component='h1' variant='h3' color='inherit' gutterBottom>
                  WELL-FORMED
                </Typography>
                <Typography variant='h5' color='inherit'>
                  A.Team for Awesome Hackathons
                </Typography>
                <Stack
                  sx={{ py: 2 }}
                  direction='row'
                  spacing={4}
                  justifyContent='center'
                >
                  <Button component={RouterLink} to={`/events/${demoEventSlug}`} variant='contained' size='large'>
                    GET A DEMO
                  </Button>
                  <Button component={RouterLink} to={'/events'} variant='outlined' color='inherit' size='large'>
                    EXPLORE EVENTS
                  </Button>
                  </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}

export default Home


