import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Stack from '@mui/material/Stack'
import Collapse from '@mui/material/Collapse'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const TeamCard = ({ team }) => {

  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const assetsPath = require.context('../../../assets/images', false)

  const owner = team.members.filter((member) => member.profile.userId === team.ownerId)[0]


  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      > 
        <CardActionArea component={RouterLink} to={`teams/${team._id}`}>
          <CardMedia
            component='img'
            image={assetsPath(team.imageUrl)}
            alt={team.name}
          />
        </CardActionArea>
        <CardContent>
          <Stack
            direction='column'
            justifyContent='space-evenly'
          >
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography component='h2' variant='h5'>
                {team.name.toUpperCase()}
              </Typography>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label='show more'
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Stack>
            <Typography variant='body2' color='text.secondary'>
                {team.tagline}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button size='small' variant='contained'>Star</Button>
          <Button size='small' variant='outlined'>Connect</Button>
        </CardActions>
        <CardContent>
          {team.lookingForMembers &&
              <Stack
                direction='column'
                justifyContent='space-evenly'
              >
                <Typography variant='subtitle2' color='secondary'>
                  Open Positions:
                </Typography>
                <ul>
                  {team.positions.map((position) => (
                    <li key={position._id}>
                      <Typography variant='body2' color='text.secondary'>
                        {position.title}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Stack>
            }
        </CardContent>    
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>IDEA:</Typography>
            <Typography paragraph color='text.secondary'>
              {team.idea}
            </Typography>
            <Typography variant='subtitle2' align='center' color='inherit'>
              {`${team.membersCount}MEMBERS   ${team.viewsCount}VIEWS   ${team.starsCount}STARS`}
            </Typography>
          </CardContent>
          <CardHeader
            disableTypography
            avatar={
              <Avatar
                src={owner.profile.avatarUrl}
              />
            }
            action={
              <Button component={RouterLink} to={`/events/${team.event.slug}/teams/${team._id}`} color='secondary' aria-label='members'>
                All Members
              </Button>
            }
            title={
              <Stack
                direction='column'
              >
                <Typography variant='subtitle2' color='primary'>
                  TEAM LEAD
                </Typography>
                <Typography variant='subtitle2'>
                  {owner.profile.displayName}
                </Typography>
                <Typography variant='subtitle2' color='text.secondary'>
                  {owner.profile.location}
                </Typography>
              </Stack>
            }
          />
        </Collapse>
      </Card>
    </Grid>
  )
}

export default TeamCard