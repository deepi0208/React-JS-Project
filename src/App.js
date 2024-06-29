
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './Pages/Admission'
import Home from './Pages/Home'
import Programs from './Pages/Programs'
import About_Us from './Pages/About_Us'
import Time_Table from './Pages/Time_Table'
import HomeLayout from './Layout/HomeLayout'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
function App() {
  return (
      <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <BrowserRouter>
          <Routes>
            <Route element={<HomeLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/About_Us' element={<About_Us />}></Route>
            <Route path='/Time_Table' element={<Time_Table />}></Route>
            <Route path='/Programs' element={<Programs />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App;