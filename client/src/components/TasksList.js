import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks } from '../asyncActions/tasksWorker';
import { useNavigate } from 'react-router-dom';
import { UPDATE_TASK_ROUTE } from '../utils/consts';

const TasksList = () => {
  const { 
    tasksList, currentPage, totalCount, tasksLimit, sortByName, sortByEmail, sortByStatus
  } = useSelector((state) => state.tasksReducer);
  const { isAuth } = useSelector((state) => state.authReducer); 
  const dispatch = useDispatch();
  const history = useNavigate();
  useEffect(() => {
    dispatch(getTasks(currentPage, tasksLimit, sortByName, sortByEmail, sortByStatus));
  }, [currentPage, totalCount, sortByName, sortByEmail, sortByStatus, tasksLimit, dispatch]);
  return (
    <Container>
      <Row className='justify-content-center'>
        {tasksList.map(({id, name, email, description, is_active : isActive, is_edited : isEdited }, index) =>
          <Col md={3} key={'card_' + index}>
            <Card
              className="mt-5"
            >
              <Card.Header>{email}</Card.Header>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <span className='px-1 bg-secondary text-white'>{isActive ? 'Active' : 'Completed'}</span>
                <br/>                    
                {isEdited ? <span className='px-1 bg-secondary text-white'>Edited</span> : ''}
              </Card.Body>
              {isAuth &&
                    <Card.Footer className='d-flex justify-content-center'>
                      <Button className='btn btn-dark py-1' onClick={() => { history(UPDATE_TASK_ROUTE + `/${id}`);}}>
                        Edit
                      </Button>
                    </Card.Footer>}
            </Card>
          </Col>
        )
        }
      </Row>
    </Container>
  );
};

export default TasksList;