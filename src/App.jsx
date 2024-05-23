import { Route, Routes } from 'react-router-dom'
import './scss/index.scss'
import Home from './components/Home/Home'
import Case from 'components/Case/Case'
import Service from 'components/Service/Service'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cases/:caseName' element={<Case />} />
        <Route path='/services/:service' element={<Service />} />
      </Routes>
    </>
  )


}

export default App