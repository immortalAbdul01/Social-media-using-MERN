import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage/login';
import ProfilePage from './scenes/profilePage/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/profile/:userId' element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
