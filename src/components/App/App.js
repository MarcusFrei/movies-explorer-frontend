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
import NotFound from '../NotFound/NotFound';

function App() {
  const { pathname } = useLocation();
  const isHeaderNeeded = ['/', '/movies', '/saved-movies', '/profile'].includes(
    pathname
  );
  const isFooterNeeded = ['/', '/movies', '/saved-movies'].includes(pathname);

  const getHeader = () => isHeaderNeeded && <Header isAuth={true} />;
  const getFooter = () => isFooterNeeded && <Footer />;
  return (
    <div className="App">
      {getHeader()}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {getFooter()}
    </div>
  );
}

export default App;
