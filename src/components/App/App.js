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
  const [isMooviesLoading, setIsMooviesLoading] = useState(false);
  const [isSavedLoading, setIsSavedLoading] = useState(false);
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
          if (pathname === '/signin' || pathname === '/signup')
            navigate('/movies');
          else navigate(pathname);
          fetchSavedMoview();
          const localMovies = JSON.parse(localStorage.getItem('movies'));
          if (localMovies) {
            setMovies(localMovies);
          }
        })
        .catch((e) => {
          navigate('/');
        });
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
        handleAuth(email, password);
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
        navigate('/movies');
      })
      .catch((e) => console.log(e));
  };

  const fetchSavedMoview = () => {
    setIsSavedLoading(true);
    mainApi
      .getInitialCards()
      .then((data) => {
        setSavedMovies(data.movies);
        setCopySavedMovies(data.movies);
        setIsSavedLoading(false);
      })
      .catch((e) => console.log(e));
  };

  const fetchMovies = () => {
    const filterText = localStorage.getItem('searchText') || '';
    const isShort = localStorage.getItem('isShort') === 'true';

    if (moviesCopy.length > 0) {
      let tempMovies = filterMovies(moviesCopy, filterText, isShort);
      setMovies(tempMovies);
      localStorage.setItem('movies', JSON.stringify(tempMovies));
    } else {
      setIsMooviesLoading(true);
      moviesApi
        .getInitialCards()
        .then((data) => {
          let tempMovies = filterMovies(data, filterText, isShort);
          setMovies(tempMovies);
          localStorage.setItem('movies', JSON.stringify(tempMovies));
          setMoviesCopy(data);
          setIsMooviesLoading(false);
        })
        .catch((e) => console.log(e));
    }
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
      .then((data) => {
        let temp = [...savedMovies, data];
        setSavedMovies(temp);
        setCopySavedMovies(temp);
      })
      .catch((e) => console.log(e));
  };

  const isInSaved = (id) => {
    const result =
      savedMovies.find((movie) => movie.movieId === id) !== undefined;

    return result;
  };

  useEffect(() => {
    if (pathname === '/movies') fetchSavedMoview();
  }, [pathname]);

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
        let temp = [...savedMovies].filter((elem) => elem._id !== movieID);
        setSavedMovies(temp);
        setCopySavedMovies(temp);
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
                  fetchMovies={fetchMovies}
                  savedMovies={savedMovies}
                  movies={movies}
                  moviesCopy={moviesCopy}
                  addMovie={addMovie}
                  deleteMovie={deleteMovie}
                  loggedIn={isAuth}
                  findIdToDelete={findIdToDelete}
                  isMooviesLoading={isMooviesLoading}
                  isInSaved={isInSaved}
                  handleSetMoovies={handleSetMoovies}
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
                  isMooviesLoading={isSavedLoading}
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
