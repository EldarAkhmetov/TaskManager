import Auth from './pages/Auth';
import Main from './pages/Main';
import TaskEditor from './pages/TaskEditor';
import { LOGIN_ROUTE, NEW_TASK_ROUTE, TASKS_ROUTE, UPDATE_TASK_ROUTE } from './utils/consts';

export const authRoutes = [
  {
    path: UPDATE_TASK_ROUTE + '/:id',
    Component: TaskEditor
  }
];

export const publicRoutes = [
  {
    path: TASKS_ROUTE,
    Component: Main,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: NEW_TASK_ROUTE,
    Component: TaskEditor,
  },
];