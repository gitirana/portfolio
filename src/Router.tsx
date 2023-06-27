import { Routes, Route } from 'react-router-dom'

import { Main } from './pages/Main/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/" />
      </Route>
    </Routes>
  )
}
