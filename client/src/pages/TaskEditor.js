import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import { createTask, editTask, getTask } from '../http/tasksAPI';
import { useNavigate, useParams } from 'react-router-dom';
import { TASKS_ROUTE } from '../utils/consts';

const TaskEditor = () => {
  const [userName, setUserName] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const history = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getTask(params.id).then(({data}) => {
        setUserName(data.name);
        setEmail(data.email);
        setDescription(data.description);
        setIsCompleted(!data.is_active);
      })
        .catch(() => {
          history(TASKS_ROUTE);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const onTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      if (params.id)
        await editTask(params.id, description, !isCompleted);
      else
        await createTask(userName, email, description);
      history(TASKS_ROUTE);
      alert(`Task was ${params.id ? 'updated' : 'created'} successfully`);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div>
      <NavBar />
      <Container
        className="d-flex justify-content-center align-items-center mt-5"                
      >
        <Card style={{width: 600, borderColor: 'white'}} className="p-5">
          <Form className="d-flex flex-column" onSubmit={onTaskSubmit}>
            <Form.Control
              required={true}
              placeholder="Name"
              value={userName}
              disabled={params.id}
              onChange={e => setUserName(e.target.value)}
            />
            <Form.Control
              required
              className="mt-3"
              placeholder="Email"
              type='email'
              value={email}
              disabled={params.id}
              onChange={e => setEmail(e.target.value)}                        
            />
            <Form.Control
              required
              className="mt-3"
              placeholder="description"
              type='text'
              value={description}
              onChange={e => setDescription(e.target.value)}                        
            />
            {params.id &&
              <Form.Check
                className='mt-2' label='Is Completed?'
                checked={isCompleted}
                onChange={() => {setIsCompleted(!isCompleted);}}/>
            }
            <Button
              className="mt-3 btn-dark align-self-end"
              type="submit">
              {params.id ? 'Update Task' : 'Create Task'}
            </Button>
          </Form>
        
        </Card>
      </Container>
    </div>
  );
};

export default TaskEditor;