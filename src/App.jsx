import { Route, Routes } from 'react-router-dom'
import './scss/index.scss'
import Home from './components/Home/Home'
import Case from 'components/Case/Case'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cases/:caseName' element={<Case />} />
      </Routes>
    </>
  )


}

export default App