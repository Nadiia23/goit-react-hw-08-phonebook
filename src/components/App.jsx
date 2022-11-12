import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from 'redux/Auth/selectors';
import { refreshUser } from 'redux/Auth/authThunk';
import Loader from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
    }
    
  }, [dispatch, token]);

  return (
    <div>
        <AppBar/>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/' element={<PublicRoute />}>
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login /> } />
            </Route>
            <Route path='/' element={<PrivateRoute/>}>
              <Route path='contacts' element={<Contacts />}/>
            </Route>
            
            {/* <Route path='/register' element={<PublicRoute redirectTo='/contacts' component={<Register />} />} />
            <Route path='/login' element={<PublicRoute redirectTo='/contacts' component={<Login />} />} />
            <Route path='/contacts' element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} /> */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>

    </div>
  );
}
