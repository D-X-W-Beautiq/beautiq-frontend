import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Apage from '../pages/Apage/Apage'
import BPage from '../pages/BPage/BPage'
import TestPage from '../pages/test'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apage />} />
        <Route path="/b" element={<BPage />} />
        <Route path="/t" element={<TestPage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter