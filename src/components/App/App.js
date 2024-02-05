import Header from '../Header/Header';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Login from '../Auth/Login/Login';
import Register from '../Auth/Register/Register';
import Movies from '../Movies/Movies';

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  console.log(navigate);
  console.log(pathname);
  const getHeader = () => {
    if (
      pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies'
    )
      return <Header isAuth={true} />;
  };

  const getFooter = () => {
    if (
      pathname === '/' ||
      pathname === '/movies' ||
      pathname === '/saved-movies'
    )
      return <Footer />;
  };
  return (
    <div className="App">
      {getHeader()}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      {getFooter()}
    </div>
  );
}

export default App;
