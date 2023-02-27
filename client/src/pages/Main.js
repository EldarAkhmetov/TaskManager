import React from 'react';
import NavBar from '../components/NavBar';
import PaginationBar from '../components/PaginationBar';
import TasksList from '../components/TasksList';

const Main = () => {
  return (
    <div>
      <NavBar />
      <TasksList/>
      <PaginationBar/>
    </div>
  );
};

export default Main;