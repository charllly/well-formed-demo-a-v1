import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

import { demoEventSlug } from '../../config'


function Navigation() {

  return (
    <Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack
          direction='row'
          spacing={3}
          sx={{ flexGrow: 1 }}
        >
          <Button component={RouterLink} to={'/'} variant='contained'>
            WELL-FORMED
          </Button>
          <Button component={RouterLink} to={`/events/${demoEventSlug}`} size='small' color='inherit'>
            Demo
          </Button>
          <Button component={RouterLink} to={'/events'} size='small' color='inherit'>
            Events
          </Button>
        </Stack>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Stack
          direction='row'
          spacing={2}
        >
          <Button size='small' variant='text' color='inherit'>
            Sign in
          </Button>
          <Button size='small' variant='contained'>
            Sign up
          </Button>
        </Stack>
      </Toolbar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation


