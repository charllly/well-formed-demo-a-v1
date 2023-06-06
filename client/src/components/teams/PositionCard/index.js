import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const PositionCard = ({ position }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardContent>
          <Stack
          direction='column'
          spacing={2}
          justifyContent='space-evenly'
          >
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography variant='h5'>
                {position.title}
              </Typography>
              <Typography variant='h6' color='secondary'>
                {position.roleCategory}
              </Typography>
            </Stack>
            <Typography variant='body2' color='text.secondary' paragraph>
              Description: {position.description}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Must-have Skills: {position.mustHaveSkills}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Nice-to-have Skills: {position.niceToHaveSkills}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default PositionCard