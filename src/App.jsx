import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Layout from './Layout/Layout'
import Homepage from './pages/HomePage/Homepage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' index element={<Homepage/>}/>

        </Route>
      </Routes>
    </>
  )
}

export default App
