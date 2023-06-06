import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import ParticipantCard from '../ParticipantCard'

const ParticipantsGrid = ({participants}) => {

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {participants.map((participant) => (
          <Grid item xs={12} sm={6} md={4}>
            <ParticipantCard key={participant._id} participant={participant} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default ParticipantsGrid