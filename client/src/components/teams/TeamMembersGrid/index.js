import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import TeamMemberCard from '../TeamMemberCard'

const TeamMembersGrid = ({members}) => {
  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {members.map((member) => (
            <TeamMemberCard key={member._id} member={member} />
        ))}
      </Grid>
    </Container>
  )
}

export default TeamMembersGrid