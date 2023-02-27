import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { check } from './http/userAPI';
import { useDispatch } from 'react-redux';
import { authAdmin } from './store/reducers/authReducer';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check().then(data => {
      dispatch(authAdmin());
    })
      .finally(() => setLoading(false));
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
