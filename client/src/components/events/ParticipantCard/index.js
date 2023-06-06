import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const ParticipantCard = ({ participant }) => {

  const categories = participant.roleCategoriesLookingFor.join(' or ')

  const skills = participant.profile.topSkills.join(', ')

  return (
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >  
      <CardContent>
        <Stack
          direction='row'
          alignItems='center'
          spacing={4}
          justifyContent='space-evenly'
        >
          <Avatar
            src={participant.profile.avatarUrl}
            sx={{ width: 100, height: 100 }}
          />
          <Stack
            direction='column'
            spacing={1}
            justifyContent='space-evenly'
          >
            <Typography variant='h6'>
              {participant.profile.displayName}
            </Typography>
            <Stack
              direction='row'
              spacing={1}
              justifyContent='center'
              sx={{ pt: 1 }}
            >
              <Typography variant='subtitle2'>
                {participant.profile.location}
              </Typography>
            </Stack>
            <Stack
              direction='row'
              spacing={1}
              justifyContent='center'
              sx={{ pt: 1 }}
            >
              <Button size='small' variant='contained'>View</Button>
              <Button size='small' variant='outlined'>Connect</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction='column'
          spacing={1}
          justifyContent='space-evenly'
          sx={{ pt: 2 }}
        >
          <Typography variant='h6'>
            {participant.profile.headline}
          </Typography>
          <Typography variant='subtitle2' color='text.secondary'>
            Top skills: {skills}
          </Typography>
          {participant.lookingForATeam &&
            <Typography variant='subtitle2' color='secondary'>
              {`Looking for a role in: ${categories}`}
            </Typography>
          }
        </Stack>
      </CardContent>   
    </Card>
  )
}

export default ParticipantCard