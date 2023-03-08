import NavMenu from './components/NavMenu'
import AddUser from './components/AddUser'
import AllUser from './components/AllUser'
import EditUser from './components/EditUser'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={ <AllUser />} />
        <Route path="/add" element={ <AddUser />} />
        <Route path="/edit/:id" element={ <EditUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
