import {Route, BrowserRouter as Router, Routes} from 'react-router';
import HomePage from './pages/home-page';
import AdminCmsPage from './pages/admin-cms-page';
import AdminLoginPage from './pages/admin-login-page';
import NotFoundPage from './pages/not-found-page';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        
        {/* Admin Routes here  */}
        <Route path='admin'>
            <Route path='' element={<AdminCmsPage/>} />
            <Route path='login' element={<AdminLoginPage/>} />
        </Route>

        {/* Fall back page this is  */}
        <Route path="*" element={<NotFoundPage/>}/>

      </Routes>
    </Router>
  )
}

export default App
