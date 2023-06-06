import { useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import { randomCoverImage } from '../../config'
import SearchBox from '../../components/generic/SearchBox'
import EventCard from '../../components/events/EventCard'

const EventsPreview = () => {

  const backgroundImageUrl = randomCoverImage

  const events = useSelector(state => state.events.eventList)

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 6,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        {<img style={{ display: 'none' }} src={backgroundImageUrl} alt={'event.name'} />}
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
                py: 10,
              }}
            >
              <SearchBox/>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Typography component='h1' variant='h3' color='inherit' gutterBottom>
        EVENTS
      </Typography>
      <Grid container spacing={4}>
        {events.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </Grid>
    </Container>
  )
}

export default EventsPreview