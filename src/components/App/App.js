import Header from '../Header/Header';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Movies from '../Movies/Movies';
import Profile from '../Auth/Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {
  const { pathname } = useLocation();
  const isHeaderFooterNeeded = [
    '/',
    '/movies',
    '/saved-movies',
    '/profile',
  ].includes(pathname);
  const getHeader = () => isHeaderFooterNeeded && <Header isAuth={true} />;
  const getFooter = () => isHeaderFooterNeeded && <Footer />;
  return (
    <div className="App">
      {getHeader()}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {getFooter()}
    </div>
  );
}

export default App;
