import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

import TeamMembersGrid from '../../components/teams/TeamMembersGrid'
import PositionsGrid from '../../components/teams/PositionsGrid'

function TeamDetail() {

  const [value, setValue] = useState('1')

  const handleChange = (e, newValue) => {
    setValue(newValue)
  }

  let { teamId } =  useParams()

  const team = useSelector(state => state.teams.teamList.filter(team => team._id == teamId)[0])

  const assetsPath = require.context('../../assets/images', false)

  const backgroundImageUrl = assetsPath(team.imageUrl)

  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth='sm'>
          <Stack
            direction='row'
            alignItems='center'
            spacing={3}
            justifyContent='space-evenly'
          >
            <Avatar
              src={team.avatarUrl}
              sx={{ width: 180, height: 180 }}
            />
            <Stack
              direction='column'
              spacing={1}
              justifyContent='space-evenly'
            >
              <Typography component='h1' variant='h3' align='center' color='text.primary'>
                {team.name}
              </Typography>
              <Typography variant='h6' align='center' color='text.secondary'>
                <RouterLink color='inherit' underline='none' to={`/events/${team.event.slug}`}>
                  {team.event.name}
                </RouterLink>
              </Typography>
              <Typography variant='h5' align='center' color='text.secondary' paragraph>
                {team.tagline}
              </Typography>
              <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='center'
                    sx={{ py: 2 }}
                  >
                    <Button variant='contained'>Star</Button>
                    <Button variant='outlined'>Share</Button>
                  </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} textColor='inherit' aria-label='team tabs'>
            <Tab label='Idea' value='1' />
            <Tab label={`Members ${team.membersCount}`} value='2' />
            <Tab label={`Positions ${team.positionsCount}`} value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'>
          <Paper
            sx={{
              position: 'relative',
              backgroundColor: 'grey.800',
              color: '#fff',
              mt: 4,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right',
              backgroundImage: `url(${backgroundImageUrl})`,
            }}
          >
            {<img style={{ display: 'none' }} src={backgroundImageUrl} alt={'team.name'} />}
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
                    px: 10,
                    pr: { md: 0 },
                    py: 20,
                  }}
                >
                  <Typography align='center' variant='h3' color='inherit'>
                    {team.idea}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </TabPanel>
        <TabPanel value='2'>
          <TeamMembersGrid members={team.members} />
        </TabPanel>
        <TabPanel value='3'>
          <PositionsGrid positions={team.positions}/>
        </TabPanel>
      </TabContext>
    </main>
  )
}

export default TeamDetail