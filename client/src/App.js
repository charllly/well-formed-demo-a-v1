import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Navigation = lazy(() =>import('./routes/navigation'))
const Home = lazy(() =>import('./routes/home'))
const EventsRouter= lazy(() =>import('./routes/events'))

const App = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='events/*' element={<EventsRouter />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
