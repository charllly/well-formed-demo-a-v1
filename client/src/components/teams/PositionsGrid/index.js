import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import PositionCard from '../PositionCard'

const PositionsGrid = ({positions}) => {

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Grid container spacing={4}>
        {positions.map((position) => (
          <PositionCard key={position._id} position={position} />
        ))}
      </Grid>
    </Container>
  )
}

export default PositionsGrid