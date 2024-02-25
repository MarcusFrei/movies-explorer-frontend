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
import Profile from '../Auth/Profile/Profile';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import { mainApi } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoutes/ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import { filterMovies } from '../../utils/functions';
import { UserContext } from '../../context/UserContext';

function App() {
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [movies, setMovies] = useState([]);
  const [moviesCopy, setMoviesCopy] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [copySavedMovies, setCopySavedMovies] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isHeaderNeeded = ['/', '/movies', '/saved-movies', '/profile'].includes(
    pathname
  );
  const isFooterNeeded = ['/', '/movies', '/saved-movies'].includes(pathname);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      mainApi
        .checkToken(token)
        .then(() => {
          setIsAuth(true);
          navigate('/movies');
          fetchMovies();
          fetchSavedMoview();
        })
        .catch((e) => {
          navigate('/signin');
        });
    } else {
      navigate('/signin');
    }
  }, []);

  useEffect(() => {
    if (!isAuth) return;
    mainApi
      .getUserInfo()
      .then((data) => setUser(data))
      .catch((e) => console.log(e));
  }, [isAuth]);

  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((data) => {
        setIsRegistrationSuccessful(true);
        navigate('/signin');
      })
      .catch((e) => setIsRegistrationSuccessful(false));
  };

  const handleAuth = (email, password) => {
    mainApi
      .login(email, password)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setIsRegistrationSuccessful(true);
        setIsAuth(true);
        fetchMovies();
        fetchSavedMoview();
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  const fetchSavedMoview = () => {
    mainApi
      .getInitialCards()
      .then((data) => {
        setSavedMovies(data.movies);
        setCopySavedMovies(data.movies);
      })
      .catch((e) => console.log(e));
  };

  const fetchMovies = () => {
    moviesApi
      .getInitialCards()
      .then((data) => {
        const filterText = localStorage.getItem('searchText') || '';
        const isShort = localStorage.getItem('isShort') === 'true';
        setMovies(filterMovies(data, filterText, isShort));
        setMoviesCopy(data);
      })
      .catch((e) => console.log(e));
  };

  const handleSetSavedMoovies = (arr) => {
    setSavedMovies(arr);
  };
  const handleSetMoovies = (arr) => {
    setMovies(arr);
  };
  const addMovie = (movie) => {
    mainApi
      .addMovieInSaved(movie)
      .then((data) => fetchSavedMoview())
      .catch((e) => console.log(e));
  };

  const findIdToDelete = (tempId) => {
    const idToDelete = savedMovies.find(
      (movie) => movie.movieId === tempId
    )._id;
    deleteMovie(idToDelete);
  };

  const deleteMovie = (movieID) => {
    mainApi
      .deleteMovieFromSaved(movieID)
      .then((data) => {
        const tempArr = [...savedMovies];
        const index = tempArr.findIndex((movie) => movie._id === movieID);
        tempArr.splice(index, 1);
        setSavedMovies(tempArr);
      })
      .catch((e) => console.log(e));
  };

  const changeUserInfo = (username, userEmail) => {
    mainApi
      .editProfile({ name: username, email: userEmail })
      .then((data) => setUser(data.user))
      .catch((e) => console.log(e));
  };

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('searchText');
    localStorage.removeItem('isShort');
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
  };

  const getHeader = () => isHeaderNeeded && <Header isAuth={isAuth} />;
  const getFooter = () => isFooterNeeded && <Footer />;
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        {getHeader()}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  savedMovies={savedMovies}
                  movies={movies}
                  moviesCopy={moviesCopy}
                  addMovie={addMovie}
                  deleteMovie={deleteMovie}
                  loggedIn={isAuth}
                  handleSetMoovies={handleSetMoovies}
                  findIdToDelete={findIdToDelete}
                />
              }
            />

            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  movies={savedMovies}
                  deleteMovie={deleteMovie}
                  handleSetSavedMoovies={handleSetSavedMoovies}
                  loggedIn={isAuth}
                  fetchSavedMoview={fetchSavedMoview}
                  moviesCopy={copySavedMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  changeUserInfo={changeUserInfo}
                  loggedIn={isAuth}
                  logout={logout}
                />
              }
            />

            <Route path="/signin" element={<Login onSubmit={handleAuth} />} />
            <Route
              path="/signup"
              element={<Register onSubmit={handleRegister} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        {getFooter()}
      </div>
    </UserContext.Provider>
  );
}

export default App;
