import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { check } from './http/userAPI';
import { useDispatch } from 'react-redux';
import { authAdmin } from './store/reducers/authReducer';
import { Spinner } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      dispatch(authAdmin());
    })
      .finally(() => setLoading(false));
  }, [dispatch]);

  if (loading)
    return <Spinner animation={'grow'} />;

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
