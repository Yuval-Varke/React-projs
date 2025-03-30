
import './css/App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import {Routes,Route} from 'react-router-dom'
import Favourite from './pages/Favourites'

function App() {

  return (
    <div>
      <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/favourites' element={<Favourite/>}></Route>
      </Routes>
    </main>
    </div>
  )
}

export default App
