import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const TeamMemberCard = ({ member }) => {

  const skills = member.profile.topSkills.join(', ')

  return (
    <Grid item xs={12} sm={6} md={4}>
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
              src={member.profile.avatarUrl}
              sx={{ width: 100, height: 100 }}
            />
            <Stack
              direction='column'
              spacing={1}
              justifyContent='space-evenly'
            >
              <Typography variant='h6'>
                {member.profile.displayName}
              </Typography>
              <Stack
                direction='row'
                spacing={1}
                justifyContent='center'
                sx={{ pt: 1 }}
              >
                <Typography variant='subtitle2'>
                  {member.profile.location} |
                </Typography>
                <Typography variant='subtitle2' color='text.secondary'>
                  {member.profile.discordUsername}
                </Typography>
              </Stack>
              <Stack
                direction='row'
                spacing={1}
                justifyContent='center'
                sx={{ pt: 1 }}
              >
                <Button size='small' variant='contained'>View</Button>
                <Button size='small' variant='outlined'>Share</Button>
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
              {member.role}
            </Typography>
            <Typography variant='subtitle2' color='text.secondary'>
              Top skills: {skills}
            </Typography>
          </Stack>
        </CardContent>      
      </Card>
    </Grid>
  )
}

export default TeamMemberCard