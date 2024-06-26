import { Route, Routes } from 'react-router-dom'
import './scss/index.scss'
import Home from './components/Home/Home'
import Case from 'components/Case/Case'
import Service from 'components/Service/Service'
import Blog from 'components/Blog/Blog'
import Article from 'components/Article/Article'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:article' element={<Article />} />
        <Route path='/services/:service' element={<Service />} />
      </Routes>
    </>
  )


}

export default App