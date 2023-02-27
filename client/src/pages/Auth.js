import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../asyncActions/userLogin';
import { useNavigate } from 'react-router-dom';
import { TASKS_ROUTE } from '../utils/consts';


const Auth = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();
  const { isAuth } = useSelector((state) => state.authReducer); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) history(TASKS_ROUTE);
  }, [isAuth]);

  const onLoginSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(userName, password)); 
  };
  return (
    <div>
      <NavBar />
      <Container
        className="d-flex justify-content-center align-items-center mt-5"                
      >
        <Card style={{width: 600, borderColor: 'white'}} className="p-5">
          <Form className="d-flex flex-column" onSubmit={onLoginSubmit}>
            <Form.Control
              required={true}
              placeholder="Enter your login"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <Form.Control
              required
              className="mt-3"
              placeholder="Enter your password"
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}                        
            />
                    
            <Button className="mt-3 btn-dark align-self-end" type="submit">Sign in</Button>
          </Form>
        
        </Card>
      </Container>
    </div>
  );
};

export default Auth;