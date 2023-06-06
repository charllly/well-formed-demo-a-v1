import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import EventsPreview from '../events-preview'
import EventDetail from '../event-detail'
import TeamDetail from '../team-detail'

const EventsRouter = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch.events.asyncFetchEvents()
  }, [])

  return (
    <Routes>
      <Route index element={<EventsPreview />} />
      <Route path=':eventSlug' element={<EventDetail />} />
      <Route path=':eventSlug/teams/:teamId' element={<TeamDetail />} />
    </Routes>
  )
}

export default EventsRouter


