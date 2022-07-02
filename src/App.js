import { Route, Routes } from 'react-router-dom';
import Login from './components/SplashPage/Login';
import SplashPage from './components/SplashPage/SplashPage';


function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<SplashPage />} exact/>
      </Routes>
    </div>
  );
}

export default App;
