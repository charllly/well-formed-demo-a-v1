import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Container from '@mui/material/Container'

import TeamsGrid from '../../components/teams/TeamsGrid'
import ParticipantsGrid from '../../components/events/ParticipantsGrid'

const EventDetail = () => {

  const { eventSlug } =  useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.teams.asyncFetchTeamsByEvent(eventSlug)
  }, [])

  useEffect(() => {
    dispatch.participants.asyncFetchParticipantsByEvent(eventSlug)
  }, [])

  const event = useSelector(state => state.events.eventList.filter(event => event.slug === eventSlug)[0])

  const teamList = useSelector(state => state.teams.teamList.filter(team => !team.archived))

  const participantList = useSelector(state => state.participants.participantList.filter(participant => participant.claimed))

  const assetsPath = require.context('../../assets/images', false)

  const backgroundImageUrl = assetsPath(event.imageUrl)

  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <main>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
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
                px: { xs: 3, md: 6 },
                pt: { xs: 6, md: 12 },
                pb: 40,
              }}
            >
              <Stack
                direction='column'
                alignItems='center'
                spacing={1}
                justifyContent='space-evenly'
              >
                <Typography component='h1' variant='h5'  align='center' color='inherit' gutterBottom>
                  {event.name}
                </Typography>
                <Typography variant='subtitle1' align='center' color='inherit'>
                  {event.tagline}
                </Typography>
                <Stack
                  direction='row'
                  spacing={2}
                  justifyContent='center'
                  sx={{ py: 2 }}
                >
                  <Button size='small' variant='contained'>
                      Official Website
                  </Button>
                  <Button size='small' variant='outlined' color='inherit'>
                      Discord Server
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      <Container sx={{ mt: -32 }} maxWidth='lg'>
        <Paper
          sx={{
            position: 'relative',
            backgroundColor: 'grey.30',
            color: '#fff',
            backgroundSize: 'cover',
          }}
        >
          <TabContext value={value}>
            <Box sx={{
              backgroundColor: 'grey.900',
              color: '#fff',
              borderBottom: 1,
              borderColor: 'divider',
            }}>
              <TabList onChange={handleChange} textColor='inherit' aria-label='event tabs'>
                <Tab label='Teams' value='1' />
                <Tab label='Participants' value='2' />
                <Tab label='About' value='3' />
              </TabList>
            </Box>
            <TabPanel value='1'>
                <TeamsGrid teams={teamList}/>
            </TabPanel>
            <TabPanel value='2'>
              <ParticipantsGrid participants={participantList}/>
            </TabPanel>
            <TabPanel value='3'>
              <Container sx={{ py: 8 }} maxWidth='md'>
                <Typography align='center' color='text.secondary' paragraph>
                  {event.description}
                </Typography>
              </Container>
            </TabPanel>
          </TabContext>
        </Paper>
      </Container>
    </main>
  )
}

export default EventDetail