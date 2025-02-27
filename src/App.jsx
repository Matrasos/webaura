import { Route, Routes } from 'react-router-dom'
import './scss/index.scss'
import Home from './components/Home/Home'
import Service from 'components/Service/Service'
import Blog from 'components/Blog/Blog'
import Article from 'components/Article/Article'
import NotFound from 'components/NotFound/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:article' element={<Article />} />
        <Route path='/services/:service' element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )


}

export default App