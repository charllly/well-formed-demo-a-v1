import { Link as RouterLink } from 'react-router-dom'
import moment from 'moment'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const EventCard = ({ event }) => {

  const assetsPath = require.context('../../../assets/images', false)

  return (
    <Grid item xs={12} md={10}>
      <CardActionArea component={RouterLink} to={`/events/${event.slug}`}>
        <Card
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          <CardContent sx={{ flex: 1 }}>
            <Stack
              direction='column'
              alignItems='center'
              spacing={1}
              justifyContent='space-evenly'
            >
              <Typography component='h2' variant='h5'>
                {event.name.toUpperCase()}
              </Typography>
              <Typography variant='subtitle1'>
                {event.tagline}
              </Typography>
              <Typography variant='h6'>
                {moment(event.startDate).format('ll').slice(0, -6)} - {moment(event.endDate).format('ll')}
              </Typography>
              <Typography variant='h6' color='text.secondary'>
                {event.location}({event.timezone})
              </Typography>
              <Typography variant='subtitle1' color='text.secondary'>
                {event.eventType}
              </Typography>
            </Stack>
          </CardContent>
          <CardMedia
            component='img'
            sx={{ width: 300, display: { xs: 'none', sm: 'block' } }}
            image={assetsPath(event.imageUrl)}
            alt={event.name}
          />
        </Card>
      </CardActionArea>
    </Grid>
  )
}

export default EventCard