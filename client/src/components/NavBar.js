import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LOGIN_ROUTE, NEW_TASK_ROUTE, TASKS_ROUTE } from '../utils/consts';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/reducers/authReducer';
import { setSortByEmail, setSortByName, setSortByStatus } from '../store/reducers/tasksReducer';

const NavBar = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { sortByName, sortByEmail, sortByStatus } = useSelector((state) => state.tasksReducer);
  const { isAuth } = useSelector((state) => state.authReducer);
  const onLogoutClick = () => {
    localStorage.removeItem('token');
    dispatch(logout());
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href={TASKS_ROUTE}>Task Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={NEW_TASK_ROUTE}>New Task</Nav.Link>
            <NavDropdown title="Sort" id="basic-nav-dropdown">
              <NavDropdown.Item active={sortByName==='ASC'} onClick={() => { dispatch(setSortByName('ASC')); }}>
                Sort By Name ASC
              </NavDropdown.Item>
              <NavDropdown.Item active={sortByName==='DESC'} onClick={() => { dispatch(setSortByName('DESC')); }}>
                Sort By Name DESC
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item active={sortByEmail==='ASC'} onClick={() => { dispatch(setSortByEmail('ASC')); }}>
                Sort By Email ASC
              </NavDropdown.Item>
              <NavDropdown.Item active={sortByEmail==='DESC'} onClick={() => { dispatch(setSortByEmail('DESC')); }}>
                Sort By Email DESC
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item active={sortByStatus==='ASC'} onClick={() => { dispatch(setSortByStatus('ASC')); }}>
                Sort By Status ASC
              </NavDropdown.Item>
              <NavDropdown.Item active={sortByStatus==='DESC'} onClick={() => { dispatch(setSortByStatus('DESC')); }}>
                Sort By Status DESC
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Button className="btn btn-dark" onClick={() => isAuth ? onLogoutClick() : history(LOGIN_ROUTE)}>
          {isAuth ? 'Logout' : 'Login'}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavBar;